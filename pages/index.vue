<template>
  <div>
    <Head>
      <Title>TechSolveLab – Tech &amp; AI Insights for US Businesses</Title>
      <Meta name="description" content="TechSolveLab covers the best AI tools, SaaS software, automation platforms, and business technology for US companies and professionals." />
      <Meta property="og:title" content="TechSolveLab – Tech &amp; AI Insights for US Businesses" />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
    </Head>

    <!-- ── HERO ──────────────────────────────────────────────────────── -->
    <section class="bg-ink text-white overflow-hidden relative min-h-[480px] flex items-center">
      <!-- Animated blobs (techieleaders-style glow) -->
      <div class="hero-blob hero-blob-a"></div>
      <div class="hero-blob hero-blob-b"></div>
      <div class="hero-blob hero-blob-c"></div>

      <!-- Subtle grid overlay -->
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px); background-size: 40px 40px;">
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div class="max-w-2xl">
          <!-- Badge — instant, no delay -->
          <span class="cat-badge bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-5 inline-block"
            data-reveal="fade-in">
            US Tech &amp; AI Coverage
          </span>

          <!-- Headline with animated gradient -->
          <h1 class="font-serif text-5xl sm:text-6xl leading-tight text-white"
            data-reveal="fade-up" data-delay="80">
            Tools &amp; insights that help US businesses
            <span class="gradient-text"> work smarter</span>
          </h1>

          <p class="mt-5 text-slate-300 text-lg leading-relaxed"
            data-reveal="fade-up" data-delay="160">
            Honest reviews, how-to guides, and software comparisons for
            entrepreneurs and teams across the United States.
          </p>

          <div class="mt-8 flex flex-wrap gap-3"
            data-reveal="fade-up" data-delay="240">
            <NuxtLink to="/blog"
              class="btn-animated inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl text-sm">
              Browse All Articles
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
            <NuxtLink to="/about"
              class="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 text-sm">
              About TechSolveLab
            </NuxtLink>
          </div>

          <!-- Stats row -->
          <div class="mt-10 flex flex-wrap gap-6" data-reveal="fade-up" data-delay="320">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
              <span class="font-serif text-2xl text-white">{{ stat.value }}</span>
              <span class="font-mono text-xs text-slate-500 uppercase tracking-wider">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── TOP AD ─────────────────────────────────────────────────────── -->
    <!-- <div class="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
      <AdBanner size="728×90 Leaderboard" :slot-style="{ height: '90px' }" />
    </div> -->

    <!-- ── LATEST ARTICLES ────────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-14">

      <div class="flex items-end justify-between mb-10" data-reveal="fade-up">
        <div>
          <p class="font-mono text-xs text-brand-500 uppercase tracking-widest mb-2">Fresh content</p>
          <h2 class="font-serif text-3xl text-ink section-accent">Latest Articles</h2>
        </div>
        <NuxtLink to="/blog"
          class="link-underline text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors pb-1">
          View all →
        </NuxtLink>
      </div>

      <!-- Featured post -->
      <div v-if="featured" data-reveal="fade-up" data-delay="60" class="mb-10">
        <NuxtLink :to="`/blog/${featured._path.replace('/posts/', '')}`" class="group block">
          <article class="post-card bg-paper-card rounded-2xl overflow-hidden border border-slate-200 md:flex">
            <div
              class="h-60 md:h-auto md:w-96 flex-shrink-0 flex flex-col justify-end p-6 relative overflow-hidden group-hover:brightness-110 transition-all duration-500">
              <!-- Image if set -->
              <img v-if="featured.image" :src="featured.image" :alt="featured.title"
                class="absolute inset-0 w-full h-full object-cover" />
              <!-- Gradient fallback -->
              <div v-else class="absolute inset-0" :style="{ background: getGradient(featured.category) }"></div>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute inset-0 opacity-20"
                style="background-image: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 60%)">
              </div>
              <span class="font-mono text-xs text-brand-300 uppercase tracking-wider font-semibold mb-2 relative z-10">Featured</span>
              <span class="cat-badge bg-white/20 backdrop-blur-sm text-white relative z-10 self-start">{{ featured.category }}</span>
            </div>
            <div class="p-8 flex flex-col justify-center flex-1">
              <h2 class="font-serif text-2xl sm:text-3xl text-ink leading-snug group-hover:text-brand-600 transition-colors duration-200">
                {{ featured.title }}
              </h2>
              <p class="mt-3 text-ink-muted leading-relaxed line-clamp-3">{{ featured.description }}</p>
              <div class="mt-6 flex items-center gap-4">
                <time class="text-xs font-mono text-ink-subtle" :datetime="featured.date">{{ formatDate(featured.date) }}</time>
                <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                <span class="text-xs font-mono text-ink-subtle">{{ readTime(featured) }} min read</span>
                <span class="ml-auto text-brand-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </NuxtLink>
      </div>

      <!-- Grid — staggered reveal -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(post, i) in rest" :key="post._id"
          data-reveal="fade-up"
          :data-delay="String(80 + i * 70)">
          <PostCard :post="post" />
        </div>
      </div>

      <div class="mt-12 text-center" data-reveal="fade-up">
        <NuxtLink to="/blog"
          class="btn-animated inline-flex items-center gap-2 bg-ink hover:bg-ink-light text-white font-semibold px-10 py-3 rounded-xl text-sm">
          View all articles →
        </NuxtLink>
      </div>
    </section>

    <!-- ── MID AD ──────────────────────────────────────────────────────── -->
    <!-- <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-2">
      <AdBanner size="970×250 Billboard" :slot-style="{ height: '90px' }" />
    </div> -->

    <!-- ── CATEGORIES ─────────────────────────────────────────────────── -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10">
      <div data-reveal="fade-up" class="mb-8">
        <p class="font-mono text-xs text-brand-500 uppercase tracking-widest mb-2">Browse by topic</p>
        <h2 class="font-serif text-3xl text-ink section-accent">What we cover</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <NuxtLink
          v-for="(cat, i) in categories" :key="cat.name"
          :to="`/blog?category=${cat.name}`"
          class="group flex flex-col items-center gap-3 bg-paper-card border border-slate-200 hover:border-brand-300 hover:bg-brand-50 rounded-2xl px-4 py-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-100"
          data-reveal="scale"
          :data-delay="String(i * 60)">
          <span class="text-3xl">{{ cat.emoji }}</span>
          <div class="text-center">
            <div class="font-semibold text-ink text-sm group-hover:text-brand-700 transition-colors">{{ cat.name }}</div>
            <div class="font-mono text-[10px] text-ink-subtle mt-0.5">
              {{ cat.count }} {{ cat.count === 1 ? 'article' : 'articles' }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ── WHY US STRIP ───────────────────────────────────────────────── -->
    <section class="bg-ink relative overflow-hidden">
      <div class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle at 10% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 90% 50%, #3b82f6 0%, transparent 50%)">
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14 relative z-10">
        <p class="font-mono text-xs text-brand-400 uppercase tracking-widest text-center mb-3" data-reveal="fade-in">Why US readers trust us</p>
        <h2 class="font-serif text-3xl text-white text-center mb-10 section-accent" data-reveal="fade-up" data-delay="60">Built for US businesses</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in trust" :key="item.title"
            class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            data-reveal="fade-up"
            :data-delay="String(80 + i * 100)">
            <div class="text-2xl mb-3">{{ item.icon }}</div>
            <h3 class="font-semibold text-white text-base mb-2">{{ item.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch all posts for homepage (latest 10 for display)
const { data: posts } = await useAsyncData('home-posts', () =>
  queryContent('/posts').sort({ date: -1 }).limit(10).find()
)

// Fetch ALL posts separately to get real counts
const { data: allPosts } = await useAsyncData('all-posts-count', () =>
  queryContent('/posts').only(['category']).find()
)

const featured = computed(() => posts.value?.[0] ?? null)
const rest      = computed(() => posts.value?.slice(1, 7) ?? [])

// Real total article count
const totalArticles = computed(() => allPosts.value?.length ?? 0)

const stats = computed(() => [
  { value: totalArticles.value.toString(), label: 'In-depth guides' },
  { value: '8',    label: 'Topic categories' },
  { value: '100%', label: 'US-focused' },
])

// Real per-category counts from content
const categoryDefs = [
  { name: 'AI Tools',      emoji: '🤖' },
  { name: 'SaaS Reviews',  emoji: '📦' },
  { name: 'Automation',    emoji: '⚙️' },
  { name: 'Software',      emoji: '💻' },
  { name: 'Business Tech', emoji: '📈' },
  { name: 'Cybersecurity', emoji: '🔒' },
]

const categories = computed(() => {
  const all = allPosts.value ?? []
  return categoryDefs.map(cat => ({
    ...cat,
    count: all.filter(p => p.category === cat.name).length,
  })).filter(c => c.count > 0 || true) // show all categories even if 0
})

const trust = [
  { icon: '🇺🇸', title: 'Written for US readers', desc: 'Every article uses US English, USD pricing, and real examples from American businesses.' },
  { icon: '🔍', title: 'Honest & independent', desc: 'We only recommend tools we\'ve researched. Affiliate relationships are always disclosed.' },
  { icon: '⚡', title: 'Always up to date', desc: 'We publish 3 new articles per week and update old ones when tools change.' },
]

const gradients = {
  'AI Tools':      'linear-gradient(135deg, #1e40af, #3b82f6)',
  'SaaS Reviews':  'linear-gradient(135deg, #065f46, #10b981)',
  'Automation':    'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'Software':      'linear-gradient(135deg, #b45309, #f59e0b)',
  'Business Tech': 'linear-gradient(135deg, #be123c, #f43f5e)',
  'Cybersecurity': 'linear-gradient(135deg, #164e63, #06b6d4)',
}

function getGradient(cat) {
  return gradients[cat] || 'linear-gradient(135deg, #374151, #6b7280)'
}

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function readTime(post) {
  const text = JSON.stringify(post?.body ?? '')
  return Math.max(1, Math.round(text.split(' ').length / 200))
}
</script>
