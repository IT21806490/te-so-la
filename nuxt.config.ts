export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],

  content: {
    highlight: {
      theme: 'github-light',
      langs: ['js', 'ts', 'html', 'css', 'bash', 'json', 'python'],
    },
    markdown: {
      anchorLinks: false,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en-US' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
      // ─── Google AdSense ────────────────────────────────────────────────────
      // Uncomment and replace YOUR_PUBLISHER_ID after AdSense approval:
      // script: [
      //   {
      //     async: true,
      //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID',
      //     crossorigin: 'anonymous',
      //   },
      // ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog', '/about', '/contact', '/privacy-policy', '/sitemap.xml'],
      failOnError: false,
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
  },
})
