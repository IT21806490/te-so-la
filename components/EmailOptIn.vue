<template>
  <div class="mt-8 rounded-2xl overflow-hidden border border-brand-200 bg-gradient-to-br from-ink to-slate-800 text-white p-7"
    data-reveal="fade-up">
    <div class="max-w-lg">
      <!-- Badge -->
      <span class="cat-badge bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-3 inline-block">
        Free weekly newsletter
      </span>

      <h3 class="font-serif text-2xl leading-snug mb-2">
        Get the best US tech guides in your inbox
      </h3>
      <p class="text-slate-400 text-sm leading-relaxed mb-5">
        New software reviews, AI tool comparisons, and business automation tips every week.
        No spam — unsubscribe anytime.
      </p>

      <!-- Form — replace action URL with your Mailchimp embed URL -->
      <!-- 
        HOW TO GET YOUR MAILCHIMP FORM URL:
        1. Go to mailchimp.com and create a free account
        2. Audience → Signup forms → Embedded forms
        3. Copy the action URL from the <form action="..."> tag
        4. Replace the placeholder URL below with your URL
      -->
      <div v-if="!submitted">
        <form
          :action="mailchimpUrl"
          method="post"
          target="_blank"
          class="flex flex-col sm:flex-row gap-3"
          @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="email"
            required
            placeholder="your@email.com"
            class="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400 transition-colors min-w-0"
          />
          <button
            type="submit"
            class="btn-animated bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm flex-shrink-0 transition-colors">
            Subscribe free →
          </button>
        </form>
        <p class="mt-2.5 text-xs text-slate-600 font-mono">
          Join US business owners and professionals reading each week.
        </p>
      </div>

      <!-- Success state -->
      <div v-else class="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
        <span class="text-xl">🎉</span>
        <div>
          <div class="font-semibold text-sm">You're subscribed!</div>
          <div class="text-slate-400 text-xs mt-0.5">Check your inbox for a confirmation email.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ── Replace this with your actual Mailchimp form action URL ─────────────────
// Get it from: Mailchimp → Audience → Signup forms → Embedded forms
// It looks like: https://yourdomain.us21.list-manage.com/subscribe/post?u=xxx&id=xxx
const mailchimpUrl = 'https://YOUR_MAILCHIMP_FORM_URL_HERE'
// ────────────────────────────────────────────────────────────────────────────

const email     = ref('')
const submitted = ref(false)

function handleSubmit() {
  if (!email.value || !email.value.includes('@')) return

  // If mailchimpUrl is set, open Mailchimp in a new tab (standard embed method)
  if (!mailchimpUrl.includes('YOUR_MAILCHIMP')) {
    window.open(
      `${mailchimpUrl}&EMAIL=${encodeURIComponent(email.value)}`,
      '_blank'
    )
  }
  submitted.value = true
  email.value = ''
}
</script>
