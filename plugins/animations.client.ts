export default defineNuxtPlugin(() => {
  const initReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0'
            setTimeout(() => {
              el.classList.add('revealed')
            }, parseInt(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el)
    })
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal)
  } else {
    initReveal()
  }

  // Re-run after every Nuxt page navigation
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => setTimeout(initReveal, 50))
  })
})
