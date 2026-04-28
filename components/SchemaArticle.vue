<template>
  <!-- Article structured data — invisible, for Google only -->
  <Head>
    <Script type="application/ld+json" :children="articleSchema" />
    <Script v-if="faqItems.length" type="application/ld+json" :children="faqSchema" />
  </Head>
</template>

<script setup>
const props = defineProps({
  post:    { type: Object, required: true },
  siteUrl: { type: String, default: 'https://techsolvelab.com' },
})

// ── Article schema ──────────────────────────────────────────────────────────
const articleSchema = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:         props.post.title,
  description:      props.post.description,
  datePublished:    props.post.date ? new Date(props.post.date).toISOString() : undefined,
  dateModified:     props.post.date ? new Date(props.post.date).toISOString() : undefined,
  image:            props.post.image
    ? `${props.siteUrl}${props.post.image}`
    : `${props.siteUrl}/images/og-default.svg`,
  url:              `${props.siteUrl}/blog/${props.post._path?.replace('/posts/', '')}`,
  publisher: {
    '@type': 'Organization',
    name:    'TechSolveLab',
    url:     props.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url:     `${props.siteUrl}/favicon.svg`,
    },
  },
  author: {
    '@type': 'Organization',
    name:    props.post.author ?? 'TechSolveLab',
    url:     props.siteUrl,
  },
  mainEntityOfPage: {
    '@type': '@id',
    '@id':   `${props.siteUrl}/blog/${props.post._path?.replace('/posts/', '')}`,
  },
  inLanguage:        'en-US',
  copyrightYear:     new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Organization',
    name:    'TechSolveLab',
  },
}))

// ── FAQ schema — built from ## h2 headings that end with ? ──────────────────
// Google shows these as expandable Q&A directly in search results
const faqItems = computed(() => {
  if (!props.post.body?.children) return []
  const items = []
  const nodes = props.post.body.children

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    // Find h2 headings that end with a question mark
    if (node.tag === 'h2') {
      const questionText = extractText(node)
      if (questionText.trim().endsWith('?')) {
        // Collect the following paragraph(s) as the answer
        let answer = ''
        let j = i + 1
        while (j < nodes.length && nodes[j].tag !== 'h2' && nodes[j].tag !== 'h3') {
          answer += extractText(nodes[j]) + ' '
          j++
          if (answer.length > 400) break
        }
        if (answer.trim()) {
          items.push({ q: questionText.trim(), a: answer.trim().slice(0, 400) })
        }
      }
    }
  }
  return items.slice(0, 8) // max 8 FAQ items
})

const faqSchema = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: faqItems.value.map(item => ({
    '@type':          'Question',
    name:             item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text:    item.a,
    },
  })),
}))

// ── Helper: extract plain text from a content node ──────────────────────────
function extractText(node) {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (node.type === 'text') return node.value ?? ''
  if (node.children) return node.children.map(extractText).join('')
  return ''
}
</script>
