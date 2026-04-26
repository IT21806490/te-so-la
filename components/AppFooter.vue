<template>
  <footer class="bg-ink text-slate-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
              <span class="text-brand-400 font-mono font-bold text-sm">TS</span>
            </div>
            <span class="font-sans font-bold text-white text-base">TechSolve<span class="text-brand-400">Lab</span></span>
          </div>
          <p class="text-sm leading-relaxed text-slate-400 max-w-xs">
            Practical guides and honest reviews on AI tools, SaaS, automation, and technology for US businesses and professionals.
          </p>
          <p class="mt-4 text-xs text-slate-600 font-mono">© {{ new Date().getFullYear() }} TechSolveLab. All rights reserved.</p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-mono text-xs">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm hover:text-white transition-colors">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-mono text-xs">Categories</h4>
          <ul class="space-y-2">
            <li v-for="cat in categories" :key="cat">
              <NuxtLink :to="`/blog?category=${cat}`" class="text-sm hover:text-white transition-colors">{{ cat }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-600">
        <NuxtLink to="/privacy-policy" class="hover:text-slate-400 transition-colors">Privacy Policy</NuxtLink>
        <NuxtLink to="/about" class="hover:text-slate-400 transition-colors">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-slate-400 transition-colors">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'All Articles' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
]

const categories = ['AI Tools', 'SaaS Reviews', 'Automation', 'Software', 'Business Tech']
</script>
