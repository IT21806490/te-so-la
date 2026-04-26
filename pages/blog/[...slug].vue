<template>
  <div>
    <Head>
      <Title>{{ post?.title }}</Title>
      <Meta name="description" :content="post?.description" />
      <Meta property="og:title" :content="post?.title" />
      <Meta property="og:description" :content="post?.description" />
      <Meta property="og:type" content="article" />
      <Meta property="article:published_time" :content="post?.date" />
      <Meta property="article:section" :content="post?.category" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Link rel="canonical" :href="`https://techsolvelab.com/blog/${$route.params.slug.join('/')}`" />
    </Head>

    <div v-if="!post" class="max-w-2xl mx-auto px-4 py-20 text-center">
      <div class="text-5xl mb-4">📄</div>
      <h1 class="font-serif text-3xl text-ink">Article not found</h1>
      <NuxtLink to="/blog" class="mt-4 inline-block text-brand-600 font-medium hover:underline">← Back to blog</NuxtLink>
    </div>

    <template v-else>
      <!-- Hero -->
      <div class="py-16 text-white relative overflow-hidden" :style="{ background: categoryGradient }">
        <div class="absolute inset-0 bg-black/25"></div>
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%)">
        </div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <NuxtLink to="/blog"
            class="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors group">
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            All Articles
          </NuxtLink>
          <span class="cat-badge bg-white/20 backdrop-blur-sm text-white border border-white/30 mb-4 inline-block ml-2"
            data-reveal="fade-in">
            {{ post.category }}
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight"
            data-reveal="fade-up" data-delay="60">
            {{ post.title }}
          </h1>
          <p class="mt-4 text-white/80 text-lg leading-relaxed"
            data-reveal="fade-up" data-delay="120">
            {{ post.description }}
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50 font-mono"
            data-reveal="fade-up" data-delay="180">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span>·</span>
            <span>{{ readingTime }} min read</span>
            <span>·</span>
            <span>{{ post.author ?? 'TechSolveLab' }}</span>
          </div>
        </div>
      </div>

      <!-- Content + Sidebar -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <!-- <AdBanner size="728×90 Leaderboard" :slot-style="{ height: '90px' }" /> -->

        <div class="mt-8 flex flex-col lg:flex-row gap-10">
          <!-- Article body -->
          <div class="flex-1 min-w-0" data-reveal="fade-up" data-delay="60">
            <div class="bg-paper-card rounded-2xl border border-slate-200 p-6 sm:p-10">
              <ContentRenderer :value="post" class="prose prose-slate max-w-none" />
            </div>

            <!-- Share -->
            <div class="mt-6 flex items-center gap-4 p-4 bg-paper-card rounded-xl border border-slate-200"
              data-reveal="fade-up" data-delay="100">
              <span class="text-sm font-semibold text-ink-muted">Share:</span>
              <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://techsolvelab.com/blog/' + $route.params.slug.join('/'))}`"
                target="_blank" rel="noopener"
                class="text-sm font-medium text-[#1d9bf0] hover:underline transition-opacity hover:opacity-80">Twitter / X</a>
              <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://techsolvelab.com/blog/' + $route.params.slug.join('/'))}`"
                target="_blank" rel="noopener"
                class="text-sm font-medium text-[#0077b5] hover:underline transition-opacity hover:opacity-80">LinkedIn</a>
            </div>

            <!-- Related posts -->
            <div v-if="related?.length" class="mt-12" data-reveal="fade-up" data-delay="60">
              <h2 class="font-serif text-2xl text-ink mb-6">Related Articles</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div v-for="(p, i) in related" :key="p._id"
                  data-reveal="fade-up" :data-delay="String(i * 80)">
                  <PostCard :post="p" />
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="lg:w-72 flex-shrink-0">
            <div class="sticky top-20 flex flex-col gap-5">

              <!-- TOC — appears first at top of sidebar -->
              <div v-if="post.body?.toc?.links?.length"
                class="bg-paper-card border border-slate-200 rounded-2xl p-5"
                data-reveal="fade-left" data-delay="200">
                <h3 class="font-semibold text-ink text-xs mb-3 uppercase tracking-wider font-mono">In this article</h3>
                <nav>
                  <ul class="space-y-1.5">
                    <li v-for="link in post.body.toc.links" :key="link.id">
                      <a :href="`#${link.id}`"
                        class="link-underline text-sm text-ink-muted hover:text-brand-600 transition-colors block leading-snug pb-0.5">
                        {{ link.text }}
                      </a>
                      <ul v-if="link.children" class="ml-3 mt-1 space-y-1">
                        <li v-for="child in link.children" :key="child.id">
                          <a :href="`#${child.id}`"
                            class="text-xs text-ink-subtle hover:text-brand-600 transition-colors block">
                            {{ child.text }}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <!-- Ad — sits below TOC -->
              <!-- <AdBanner size="300×250 Rectangle" :slot-style="{ height: '250px' }" /> -->

            </div>
          </aside>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const slug  = computed(() => route.params.slug.join('/'))

const { data: post } = await useAsyncData(`post-${slug.value}`, () =>
  queryContent(`/posts/${slug.value}`).findOne()
)

const { data: allPosts } = await useAsyncData('all-for-related', () =>
  queryContent('/posts').sort({ date: -1 }).find()
)

const related = computed(() => {
  if (!post.value || !allPosts.value) return []
  return allPosts.value
    .filter(p => p._path !== post.value._path && p.category === post.value.category)
    .slice(0, 2)
})

const gradients = {
  'AI Tools':      'linear-gradient(135deg, #1e40af, #3b82f6)',
  'SaaS Reviews':  'linear-gradient(135deg, #065f46, #10b981)',
  'Automation':    'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'Software':      'linear-gradient(135deg, #b45309, #f59e0b)',
  'Business Tech': 'linear-gradient(135deg, #be123c, #f43f5e)',
  'Cybersecurity': 'linear-gradient(135deg, #164e63, #06b6d4)',
}

const categoryGradient = computed(() =>
  gradients[post.value?.category] || 'linear-gradient(135deg, #374151, #6b7280)'
)

const readingTime = computed(() => {
  if (!post.value?.body) return 3
  const text = JSON.stringify(post.value.body)
  return Math.max(1, Math.round(text.split(' ').length / 200))
})

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
