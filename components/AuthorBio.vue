<template>
  <div class="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row gap-5 items-start"
    data-reveal="fade-up">
    <!-- Avatar -->
    <div class="flex-shrink-0">
      <div class="w-16 h-16 rounded-2xl bg-ink flex items-center justify-center text-white font-serif text-xl select-none">
        TS
      </div>
    </div>

    <!-- Bio text -->
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 flex-wrap mb-1">
        <span class="font-semibold text-ink text-sm">{{ author }}</span>
        <span class="cat-badge bg-brand-100 text-brand-700 border border-brand-200 text-[10px]">TechSolveLab Editorial</span>
      </div>
      <p class="text-sm text-ink-muted leading-relaxed">
        The TechSolveLab editorial team researches and reviews the best tech tools, SaaS platforms, and business software for US companies and professionals. Every recommendation is based on independent research — we disclose affiliate relationships clearly and never accept payment for positive reviews.
      </p>
      <!-- E-E-A-T trust signals -->
      <div class="mt-3 flex flex-wrap gap-3">
        <span class="flex items-center gap-1.5 text-xs text-ink-subtle font-mono">
          <svg class="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
          Independent research
        </span>
        <span class="flex items-center gap-1.5 text-xs text-ink-subtle font-mono">
          <svg class="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
          </svg>
          US-focused coverage
        </span>
        <span class="flex items-center gap-1.5 text-xs text-ink-subtle font-mono">
          <svg class="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Affiliate links disclosed
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  author: { type: String, default: 'TechSolveLab' },
})
</script>
