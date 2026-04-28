<template>
  <div>
    <Head>
      <Title>About TechSolveLab</Title>
      <Meta name="description" content="TechSolveLab is a US-focused tech blog covering AI tools, SaaS reviews, automation, and business software to help American businesses grow." />
    </Head>

    <!-- Dark hero -->
    <div class="bg-ink text-white py-16 relative overflow-hidden">
      <div class="hero-blob hero-blob-a" style="opacity:0.5"></div>
      <div class="hero-blob hero-blob-b" style="opacity:0.4"></div>
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:40px 40px">
      </div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <span class="cat-badge bg-white/10 text-slate-300 border border-white/20 mb-4"
          data-reveal="fade-in">About</span>
        <h1 class="font-serif text-4xl sm:text-5xl text-white leading-tight mt-3"
          data-reveal="fade-up" data-delay="60">
          We cover tech that <em class="gradient-text not-italic">actually matters</em> for US businesses
        </h1>
        <p class="mt-4 text-slate-400 text-lg leading-relaxed max-w-xl"
          data-reveal="fade-up" data-delay="120">
          Independent guides, honest reviews, and practical how-tos — written for entrepreneurs and teams across the United States.
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <div class="prose prose-slate max-w-none" data-reveal="fade-up">
        <p>
          <strong>TechSolveLab</strong> is an independent technology publication focused on helping US-based businesses, entrepreneurs, and professionals navigate the fast-moving world of AI tools, SaaS software, automation platforms, and business technology.
        </p>
        <p>
          We believe great software should be accessible to everyone — from solo freelancers in Texas to small teams in New York. Our mission is to cut through marketing noise and give you straightforward, practical answers.
        </p>

        <h2>What we cover</h2>
        <ul>
          <li><strong>AI Tools</strong> — ChatGPT alternatives, AI writing tools, AI for customer service, and more</li>
          <li><strong>SaaS Reviews</strong> — In-depth comparisons of CRM, project management, accounting, and HR software</li>
          <li><strong>Automation</strong> — Workflow automation, Zapier alternatives, no-code platforms</li>
          <li><strong>Business Tech</strong> — ERP, invoicing, payroll, and cloud storage for US businesses</li>
          <li><strong>Cybersecurity</strong> — VPNs, password managers, and security for small business</li>
        </ul>

        <h2>Our editorial standards</h2>
        <p>
          Every article is researched and written by our editorial team. We disclose affiliate relationships clearly. Our recommendations are based on actual research — not advertiser relationships. We never accept payment for positive coverage.
        </p>

        <h2>Affiliate disclosure</h2>
        <p>
          TechSolveLab participates in affiliate marketing programs. This means some links on our site — particularly links to software products and services we recommend — may be affiliate links. If you click on an affiliate link and make a purchase or sign up for a service, TechSolveLab may receive a commission at no additional cost to you.
        </p>
        <p>
          We only recommend products and services that we have researched and believe are genuinely useful to our US audience. Our editorial opinions are never influenced by affiliate relationships. We identify affiliate relationships where relevant in our content.
        </p>

        <h2>Advertising</h2>
        <p>
          TechSolveLab earns revenue through display advertising (Google AdSense). Advertisements are clearly separated from editorial content. Advertisers have no influence over our editorial decisions or recommendations.
        </p>

        <h2>Contact us</h2>
        <p>
          Have a question, tip, correction, or want to suggest a topic?
          <NuxtLink to="/contact">Reach out via our contact page</NuxtLink> or email us at
          <a href="mailto:hello@techsolvelab.com">hello@techsolvelab.com</a>.
        </p>
      </div>

      <!-- Trust signals -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4" data-reveal="fade-up">
        <div v-for="item in trust" :key="item.title"
          class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
          <div class="text-2xl mb-2">{{ item.icon }}</div>
          <div class="font-semibold text-ink text-sm mb-1">{{ item.title }}</div>
          <div class="text-xs text-ink-muted leading-relaxed">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trust = [
  { icon: '🇺🇸', title: 'US-focused content', desc: 'Every article written specifically for US businesses, with USD pricing and US-specific examples.' },
  { icon: '🔍', title: 'Independent research', desc: 'We never accept payment for positive reviews. Affiliate links are always clearly disclosed.' },
  { icon: '📧', title: 'Get in touch', desc: 'Questions, corrections, or article suggestions? We read every email at hello@techsolvelab.com.' },
]
</script>
