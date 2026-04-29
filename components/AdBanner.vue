<template>
  <div :class="['my-6', wrapClass]">

    <!-- Placeholder shown while waiting for AdSense approval -->
    <div
      v-if="!adsenseEnabled"
      class="ad-slot"
      :style="slotStyle"
    >
      Ad Space · {{ size }}
    </div>

    <!-- Live AdSense unit — shows after adsenseEnabled = true -->
    <ins
      v-else
      ref="adRef"
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="publisherId"
      :data-ad-slot="adSlot"
      :data-ad-format="format"
      data-full-width-responsive="true"
    ></ins>

  </div>
</template>

<script setup>
const props = defineProps({
  size:        { type: String, default: '728×90 Leaderboard' },
  wrapClass:   { type: String, default: '' },
  slotStyle:   { type: Object, default: () => ({ height: '90px' }) },
  publisherId: { type: String, default: 'ca-pub-5769619247124269' },

  // ── HOW TO GET YOUR REAL AD SLOT ID ────────────────────────────────
  // 1. Go to AdSense → Ads → By ad unit → Create new ad unit
  // 2. Choose "Display ads" → name it → click Create
  // 3. Copy the number from data-ad-slot="XXXXXXXXXX" in the code shown
  // 4. Replace the value below with that number
  // ───────────────────────────────────────────────────────────────────
  adSlot:  { type: String, default: '1148068935' },
  format:  { type: String, default: 'auto' },
})

// ── SET THIS TO true AFTER ADSENSE SITE IS APPROVED ────────────────
// The Sites card in AdSense dashboard must show a green tick first.
// Also replace YOUR_AD_SLOT_ID above with your real slot ID.
// ────────────────────────────────────────────────────────────────────
const adsenseEnabled = true

const adRef = ref(null)

onMounted(() => {
  if (!adsenseEnabled) return
  try {
    // Initialize the ad unit — required for AdSense to render the ad
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    console.error('AdSense init error:', e)
  }
})
</script>
