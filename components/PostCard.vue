<template>
  <article class="post-card bg-paper-card rounded-2xl overflow-hidden border border-slate-200 flex flex-col h-full">

    <!-- Thumbnail: image if set, gradient fallback -->
    <NuxtLink :to="postUrl" class="block relative overflow-hidden group">
      <div class="h-48 relative">

        <!-- Real image (if post.image is set in frontmatter) -->
        <img
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <!-- Gradient fallback (if no image) -->
        <div
          v-else
          class="w-full h-full transition-transform duration-500 group-hover:scale-105"
          :style="{ background: categoryGradient }">
        </div>

        <!-- Overlay sheen on hover -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

        <!-- Category badge always visible bottom-left -->
        <div class="absolute bottom-0 left-0 right-0 p-3 flex items-end"
          :style="post.image ? 'background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' : ''">
          <span class="cat-badge bg-white/20 backdrop-blur-sm text-white">{{ post.category }}</span>
        </div>
      </div>
    </NuxtLink>

    <!-- Text body -->
    <div class="flex flex-col flex-1 p-5">
      <NuxtLink :to="postUrl">
        <h2 class="font-serif text-lg text-ink leading-snug hover:text-brand-600 transition-colors duration-200 line-clamp-2">
          {{ post.title }}
        </h2>
      </NuxtLink>
      <p class="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-3 flex-1">
        {{ post.description }}
      </p>

      <div class="mt-4 flex items-center justify-between pt-4 border-t border-slate-100">
        <div class="flex items-center gap-2">
          <time class="text-xs font-mono text-ink-subtle" :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span class="text-slate-200 text-xs">·</span>
          <span class="text-xs font-mono text-ink-subtle">{{ readTime }} min</span>
        </div>
        <NuxtLink
          :to="postUrl"
          class="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-all duration-200 hover:gap-2 group">
          Read
          <svg class="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({ post: { type: Object, required: true } })

const postUrl = computed(() => `/blog/${props.post._path.replace('/posts/', '')}`)

const gradients = {
  'AI Tools':      'linear-gradient(135deg, #1e40af, #3b82f6)',
  'SaaS Reviews':  'linear-gradient(135deg, #065f46, #10b981)',
  'Automation':    'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'Software':      'linear-gradient(135deg, #b45309, #f59e0b)',
  'Business Tech': 'linear-gradient(135deg, #be123c, #f43f5e)',
  'Cybersecurity': 'linear-gradient(135deg, #164e63, #06b6d4)',
  'Cloud':         'linear-gradient(135deg, #0369a1, #38bdf8)',
  'Tutorials':     'linear-gradient(135deg, #166534, #4ade80)',
}

const categoryGradient = computed(() =>
  gradients[props.post.category] || 'linear-gradient(135deg, #374151, #6b7280)'
)

const readTime = computed(() => {
  const text = JSON.stringify(props.post?.body ?? '')
  return Math.max(1, Math.round(text.split(' ').length / 200))
})

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
