<template>
  <div>
    <Head>
      <Title>Contact TechSolveLab</Title>
      <Meta name="description" content="Get in touch with TechSolveLab. Send us your questions, article suggestions, or partnership inquiries." />
    </Head>

    <!-- Dark hero -->
    <div class="bg-ink text-white py-16 relative overflow-hidden">
      <div class="hero-blob hero-blob-a" style="opacity:0.5"></div>
      <div class="hero-blob hero-blob-b" style="opacity:0.4"></div>
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:40px 40px">
      </div>
      <div class="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        <span class="cat-badge bg-white/10 text-slate-300 border border-white/20 mb-4"
          data-reveal="fade-in">Contact</span>
        <h1 class="font-serif text-4xl sm:text-5xl text-white mt-3"
          data-reveal="fade-up" data-delay="60">Get in touch</h1>
        <p class="mt-3 text-slate-400 text-lg"
          data-reveal="fade-up" data-delay="120">
          Have a question, article suggestion, or correction? We'd love to hear from you.
        </p>
      </div>
    </div>

    <!-- Form -->
    <div class="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <div v-if="submitted"
        class="p-8 bg-green-50 border border-green-200 rounded-2xl text-center"
        data-reveal="scale">
        <div class="text-4xl mb-3">✅</div>
        <h2 class="font-semibold text-green-800 text-lg">Message sent!</h2>
        <p class="text-green-700 text-sm mt-1">We'll get back to you within 2–3 business days.</p>
      </div>

      <form v-else class="space-y-5" data-reveal="fade-up" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-semibold text-ink mb-1.5" for="name">Your name</label>
            <input id="name" v-model="form.name" type="text" required placeholder="Jane Smith"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"/>
          </div>
          <div>
            <label class="block text-sm font-semibold text-ink mb-1.5" for="email">Email address</label>
            <input id="email" v-model="form.email" type="email" required placeholder="jane@company.com"
              class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"/>
          </div>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5" for="subject">Subject</label>
          <select id="subject" v-model="form.subject"
            class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition">
            <option value="">Select a topic…</option>
            <option>Article suggestion</option>
            <option>Correction or feedback</option>
            <option>Partnership inquiry</option>
            <option>General question</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-ink mb-1.5" for="message">Message</label>
          <textarea id="message" v-model="form.message" required rows="5"
            placeholder="Tell us what's on your mind…"
            class="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"></textarea>
        </div>
        <button type="submit"
          class="btn-animated w-full bg-ink hover:bg-ink-light text-white font-semibold py-3 rounded-xl transition-colors text-sm">
          Send Message →
        </button>
        <p class="text-xs text-ink-subtle text-center">
          Or email us directly at
          <a href="mailto:hello@techsolvelab.com" class="text-brand-600 hover:underline">hello@techsolvelab.com</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
const submitted = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '' })

function handleSubmit() {
  // Integrate with Formspree: https://formspree.io
  // fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', body:JSON.stringify(form), headers:{'Content-Type':'application/json'} })
  submitted.value = true
}
</script>
