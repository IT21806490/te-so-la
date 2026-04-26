<template>
  <header
    class="sticky top-0 z-50 header-blur border-b transition-all duration-300"
    :class="scrolled
      ? 'bg-white/95 shadow-sm border-slate-200'
      : 'bg-ink/95 border-white/10'">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between transition-all duration-300"
        :class="scrolled ? 'h-14' : 'h-16'">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
            :class="scrolled ? 'bg-ink' : 'bg-white/10'">
            <span class="text-brand-400 font-mono font-bold text-sm leading-none">TS</span>
          </div>
          <div class="flex flex-col leading-none">
            <span class="font-sans font-extrabold text-base tracking-tight transition-colors duration-200"
              :class="scrolled ? 'text-ink' : 'text-white'">
              TechSolve<span class="text-brand-500">Lab</span>
            </span>
            <span class="font-mono text-[9px] uppercase tracking-widest transition-colors duration-200"
              :class="scrolled ? 'text-ink-subtle' : 'text-white/40'">
              Tech &amp; AI Insights
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="link-underline px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="scrolled
              ? 'text-ink-muted hover:text-ink hover:bg-slate-100'
              : 'text-white/70 hover:text-white hover:bg-white/10'"
            active-class="!text-brand-500 !font-semibold bg-brand-50/10"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors duration-200"
          :class="scrolled ? 'text-ink-muted hover:bg-slate-100' : 'text-white/70 hover:bg-white/10'"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu">
          <svg v-if="!mobileOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Nav -->
      <Transition name="slide">
        <nav v-if="mobileOpen"
          class="md:hidden pb-4 border-t mt-1 pt-3 flex flex-col gap-1 transition-colors duration-200"
          :class="scrolled ? 'border-slate-100' : 'border-white/10'">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="scrolled
              ? 'text-ink-muted hover:text-ink hover:bg-slate-100'
              : 'text-white/70 hover:text-white hover:bg-white/10'"
            active-class="text-brand-500 font-semibold"
            @click="mobileOpen = false">
            {{ link.label }}
          </NuxtLink>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
const route      = useRoute()
const mobileOpen = ref(false)
const scrolled   = ref(false)

const navLinks = [
  { to: '/',        label: 'Home'    },
  { to: '/blog',    label: 'Blog'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Re-check scroll position on every page navigation
watch(() => route.path, () => {
  nextTick(() => { scrolled.value = window.scrollY > 60 })
})
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
