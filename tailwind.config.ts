import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        ink: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          muted: '#475569',
          subtle: '#94a3b8',
        },
        paper: {
          DEFAULT: '#fafaf8',
          warm: '#f5f0e8',
          card: '#ffffff',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            fontFamily: 'Manrope, system-ui, sans-serif',
            color: '#0f172a',
            lineHeight: '1.8',
            fontSize: '1.0625rem',
            h1: { fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: '400', lineHeight: '1.2' },
            h2: { fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: '400', lineHeight: '1.3', marginTop: '2rem' },
            h3: { fontFamily: 'Instrument Serif, Georgia, serif', fontWeight: '400' },
            a: { color: '#ea580c', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline' } },
            code: { fontFamily: 'JetBrains Mono, monospace', backgroundColor: '#f1f5f9', padding: '0.2em 0.4em', borderRadius: '0.25rem', fontSize: '0.875em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            blockquote: { borderLeftColor: '#f97316', backgroundColor: '#fff7ed', padding: '1rem 1.5rem', fontStyle: 'normal' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config
