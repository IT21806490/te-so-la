<template>
  <div>
    <Head>
      <Title>All Articles</Title>
      <Meta
        name="description"
        content="Browse all tech articles, AI tool reviews, SaaS comparisons, and automation guides for US businesses on TechSolveLab."
      />
    </Head>

    <!-- Page header -->
    <div class="bg-ink text-white py-16 relative overflow-hidden">
      <div class="hero-blob hero-blob-a" style="opacity:0.6"></div>
      <div class="hero-blob hero-blob-b" style="opacity:0.5"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <span
          class="cat-badge bg-white/10 text-slate-300 border border-white/20 mb-4 inline-block"
          data-reveal="fade-in"
        >
          All Articles
        </span>

        <h1 class="font-serif text-4xl sm:text-5xl" data-reveal="fade-up">
          The TechSolveLab Library
        </h1>

        <p class="mt-3 text-slate-400 max-w-xl">
          {{ posts?.length ?? 0 }} in-depth guides, honest reviews, and tutorials —
          all written for US businesses.
        </p>

        <!-- Search -->
        <div class="mt-6 relative max-w-md">
          <svg
            class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles…"
            class="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400"
            @input="currentPage = 1"
          />
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <!-- <AdBanner size="728×90 Leaderboard" :slot-style="{ height: '90px' }" /> -->

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2 my-8">
        <button
          @click="setCategory('')"
          :class="[
            'cat-badge border',
            activeCategory === ''
              ? 'bg-ink text-white border-ink'
              : 'bg-white text-ink-muted border-slate-200'
          ]"
        >
          All
        </button>

        <button
          v-for="cat in allCategories"
          :key="cat"
          @click="setCategory(cat)"
          :class="[
            'cat-badge border',
            activeCategory === cat
              ? 'bg-ink text-white border-ink'
              : 'bg-white text-ink-muted border-slate-200'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Results info -->
      <div class="flex items-center justify-between mb-6">
        <p class="text-sm text-ink-subtle font-mono">
          {{ filteredPosts.length }} article
          {{ filteredPosts.length !== 1 ? "s" : "" }}

          <span v-if="activeCategory">
            in <strong>{{ activeCategory }}</strong>
          </span>

          <span v-if="searchQuery">
            matching "<strong>{{ searchQuery }}</strong>"
          </span>

          <span v-if="totalPages > 1">
            · Page {{ currentPage }} of {{ totalPages }}
          </span>
        </p>

        <button
          v-if="activeCategory || searchQuery"
          @click="searchQuery = ''; setCategory('')"
          class="text-xs text-brand-600 font-medium"
        >
          Clear filters ×
        </button>
      </div>

      <!-- Posts grid -->
      <div
        v-if="paginatedPosts.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div v-for="post in paginatedPosts" :key="post._id">
          <PostCard :post="post" />
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="text-center py-20">
        <div class="text-5xl mb-4">🔍</div>
        <h2 class="font-serif text-2xl">No articles found</h2>
        <p class="text-ink-muted mt-2">
          Try a different search or category.
        </p>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="mt-12 flex items-center justify-center gap-2"
      >
        <!-- Prev -->
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 border rounded-xl text-sm"
        >
          Prev
        </button>

        <template v-for="page in pageNumbers" :key="page">
          <span v-if="page === '...'" class="px-2">…</span>

          <button
            v-else
            @click="goToPage(page)"
            class="w-9 h-9 rounded-xl border"
            :class="page === currentPage ? 'bg-ink text-white' : ''"
          >
            {{ page }}
          </button>
        </template>

        <!-- Next -->
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 border rounded-xl text-sm"
        >
          Next
        </button>
      </div>

      <!-- <AdBanner
        size="300×250 Rectangle"
        :slot-style="{
          height: '250px',
          maxWidth: '336px',
          margin: '2rem auto'
        }"
      /> -->
    </div>
  </div>
</template>

<script setup>
const POSTS_PER_PAGE = 9

const route = useRoute()

const searchQuery = ref('')
const activeCategory = ref(route.query.category ?? '')
const currentPage = ref(Number(route.query.page) || 1)

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('/posts').sort({ date: -1 }).find()
)

const allCategories = computed(() => {
  const cats = new Set(
    (posts.value || []).map(p => p.category).filter(Boolean)
  )
  return [...cats].sort()
})

const filteredPosts = computed(() => {
  let list = posts.value || []

  if (activeCategory.value) {
    list = list.filter(p => p.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()

    list = list.filter(
      p =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    )
  }

  return list
})

const totalPages = computed(() =>
  Math.max(
    1,
    Math.ceil(filteredPosts.value.length / POSTS_PER_PAGE)
  )
)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * POSTS_PER_PAGE
  return filteredPosts.value.slice(
    start,
    start + POSTS_PER_PAGE
  )
})

/* FIXED pagination */
const pageNumbers = computed(() => {
  const total = totalPages.value
  const cur = currentPage.value

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = []

  pages.push(1)

  if (cur > 3) pages.push('...')

  for (
    let p = Math.max(2, cur - 1);
    p <= Math.min(total - 1, cur + 1);
    p++
  ) {
    pages.push(p)
  }

  if (cur < total - 2) pages.push('...')

  pages.push(total)

  return pages
})

function setCategory(cat) {
  activeCategory.value =
    cat === activeCategory.value ? '' : cat
  currentPage.value = 1
}

function goToPage(page) {
  if (typeof page !== 'number') return
  if (page < 1 || page > totalPages.value) return

  currentPage.value = page

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

watch(
  () => route.query.category,
  val => {
    activeCategory.value = val ?? ''
    currentPage.value = 1
  }
)

watch([searchQuery, activeCategory], () => {
  currentPage.value = 1
})
</script>
