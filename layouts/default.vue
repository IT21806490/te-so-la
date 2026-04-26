<template>
  <div class="min-h-screen flex flex-col bg-paper">
    <AppHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (t) => t ? `${t} | TechSolveLab` : 'TechSolveLab – Tech & AI Insights for US Businesses',
})
</script>
