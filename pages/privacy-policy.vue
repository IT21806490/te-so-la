<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
    <Head>
      <Title>Privacy Policy</Title>
      <Meta name="description" content="TechSolveLab Privacy Policy – how we collect, use, and protect your information." />
    </Head>

    <span class="cat-badge bg-slate-100 text-slate-600 border border-slate-200 mb-4 inline-block">Legal</span>
    <h1 class="font-serif text-4xl text-ink">Privacy Policy</h1>
    <p class="mt-2 text-xs font-mono text-ink-subtle">Last updated: {{ lastUpdated }}</p>

    <div class="mt-8 prose prose-slate max-w-none">
      <h2>1. Information We Collect</h2>
      <p>TechSolveLab ("we," "our," or "us") collects information in the following ways:</p>
      <ul>
        <li><strong>Log data:</strong> When you visit our website, our servers automatically record information including your IP address, browser type, referring/exit pages, and timestamps.</li>
        <li><strong>Contact forms:</strong> If you contact us via our contact form, we collect your name, email address, and message content.</li>
        <li><strong>Cookies:</strong> We use cookies to enhance your experience, analyze site traffic, and serve relevant advertisements.</li>
      </ul>

      <h2>2. Google AdSense &amp; Advertising</h2>
      <p>
        We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our site or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google's Ads Settings</a>.
      </p>
      <p>
        Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. For more information about Google's privacy practices, visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.
      </p>

      <h2>3. Google Analytics</h2>
      <p>
        We may use Google Analytics to analyze website traffic and usage patterns. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.
      </p>

      <h2>4. Affiliate Links</h2>
      <p>
        Some links on TechSolveLab are affiliate links. If you click on an affiliate link and make a purchase, we may earn a commission at no additional cost to you. We only recommend products and services we believe are genuinely useful.
      </p>

      <h2>5. How We Use Your Information</h2>
      <ul>
        <li>To operate and improve our website</li>
        <li>To respond to contact form submissions</li>
        <li>To analyze traffic patterns and improve content</li>
        <li>To display relevant advertising</li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share aggregated, anonymized data with advertising partners for analytics purposes.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website uses cookies. By using our website, you consent to our use of cookies. You can control cookies through your browser settings, though disabling cookies may affect site functionality.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        Our website is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
      </p>

      <h2>9. Your Rights (California Residents)</h2>
      <p>
        If you are a California resident, you have the right to know what personal information we collect, to delete personal information we hold about you, and to opt out of the sale of your personal information. To exercise these rights, contact us at <a href="mailto:hello@techsolvelab.com">hello@techsolvelab.com</a>.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:<br />
        <strong>TechSolveLab</strong><br />
        Email: <a href="mailto:hello@techsolvelab.com">hello@techsolvelab.com</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
</script>
