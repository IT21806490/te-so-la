<template>
  <div>
    <Head>
      <Title>All Articles</Title>
      <Meta name="description" content="Browse all tech articles, AI tool reviews, SaaS comparisons, and automation guides for US businesses on TechSolveLab." />
    </Head>

    <!-- Page header -->
    <div class="bg-ink text-white py-16 relative overflow-hidden">
      <div class="hero-blob hero-blob-a" style="opacity:0.6"></div>
      <div class="hero-blob hero-blob-b" style="opacity:0.5"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <span class="cat-badge bg-white/10 text-slate-300 border border-white/20 mb-4 inline-block"
          data-reveal="fade-in">All Articles</span>
        <h1 class="font-serif text-4xl sm:text-5xl" data-reveal="fade-up" data-delay="60">
          The TechSolveLab Library
        </h1>
        <p class="mt-3 text-slate-400 max-w-xl" data-reveal="fade-up" data-delay="120">
          {{ posts?.length ?? 0 }} in-depth guides, honest reviews, and tutorials — all written for US businesses.
        </p>

        <!-- Search -->
        <div class="mt-6 relative max-w-md" data-reveal="fade-up" data-delay="180">
          <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles…"
            class="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400 transition-colors"/>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <!-- <AdBanner size="728×90 Leaderboard" :slot-style="{ height: '90px' }" /> -->

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2 my-8" data-reveal="fade-up">
        <button
          @click="activeCategory = ''"
          :class="['cat-badge border transition-all duration-200', activeCategory === ''
            ? 'bg-ink text-white border-ink scale-105'
            : 'bg-white text-ink-muted border-slate-200 hover:border-slate-300']">
          All
        </button>
        <button
          v-for="cat in allCategories" :key="cat"
          @click="activeCategory = activeCategory === cat ? '' : cat"
          :class="['cat-badge border transition-all duration-200', activeCategory === cat
            ? 'bg-ink text-white border-ink scale-105'
            : 'bg-white text-ink-muted border-slate-200 hover:border-slate-300']">
          {{ cat }}
        </button>
      </div>

      <p class="text-sm text-ink-subtle font-mono mb-6">
        {{ filteredPosts.length }} article{{ filteredPosts.length !== 1 ? 's' : '' }}
        <span v-if="activeCategory"> in <strong class="text-ink">{{ activeCategory }}</strong></span>
        <span v-if="searchQuery"> matching "<strong class="text-ink">{{ searchQuery }}</strong>"</span>
      </p>

      <!-- Posts grid with staggered reveal -->
      <div v-if="filteredPosts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(post, i) in filteredPosts" :key="post._id"
          data-reveal="fade-up"
          :data-delay="String(Math.min(i, 5) * 60)">
          <PostCard :post="post" />
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20" data-reveal="scale">
        <div class="text-5xl mb-4">🔍</div>
        <h2 class="font-serif text-2xl text-ink">No articles found</h2>
        <p class="text-ink-muted mt-2">Try a different search or category.</p>
        <button @click="searchQuery = ''; activeCategory = ''"
          class="mt-4 text-sm text-brand-600 font-medium hover:underline">
          Clear filters
        </button>
      </div>

      <!-- <AdBanner size="300×250 Rectangle" :slot-style="{ height: '250px', maxWidth: '336px', margin: '2rem auto' }" class="mt-10" /> -->
    </div>
  </div>
</template>

<script setup>
const route          = useRoute()
const searchQuery    = ref('')
const activeCategory = ref(route.query.category ?? '')

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('/posts').sort({ date: -1 }).find()
)

const allCategories = computed(() => {
  const cats = new Set(posts.value?.map(p => p.category).filter(Boolean))
  return [...cats].sort()
})

const filteredPosts = computed(() => {
  let list = posts.value ?? []
  if (activeCategory.value) list = list.filter(p => p.category === activeCategory.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.title?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q))
  }
  return list
})

watch(() => route.query.category, (val) => { activeCategory.value = val ?? '' })
</script>
