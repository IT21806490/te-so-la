<template>
  <!-- ═══════════════════════════════════════════════════════════════════
       AD SLOT — Replace the placeholder div with your real AdSense code
       after approval. See comments below.
       ══════════════════════════════════════════════════════════════════ -->
  <div :class="['my-6', wrapClass]">

    <!-- ── STEP 1: While waiting for AdSense approval ─────────────────── -->
    <div
      v-if="!adsenseEnabled"
      class="ad-slot"
      :style="slotStyle"
    >
      Ad Space · {{ size }}
    </div>

    <!-- ── STEP 2: After AdSense approval — uncomment this block ──────── -->
    <!--
    <ins
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="publisherId"
      :data-ad-slot="adSlot"
      :data-ad-format="format"
      data-full-width-responsive="true"
    ></ins>
    -->
  </div>
</template>

<script setup>
defineProps({
  size:          { type: String, default: '728×90 Leaderboard' },
  wrapClass:     { type: String, default: '' },
  slotStyle:     { type: Object, default: () => ({ height: '90px' }) },
  // ─── AdSense props (use after approval) ──────────────────────────
  // publisherId: { type: String, default: 'ca-pub-XXXXXXXXXXXXXXXX' },
  // adSlot:      { type: String, default: '1234567890' },
  // format:      { type: String, default: 'auto' },
})

// Set to true after AdSense approval and uncomment the <ins> block above
const adsenseEnabled = false
</script>
