import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A1628',
        'brand-blue': '#1B4FD8',
        'brand-sky': '#3B82F6',
        'brand-gold': '#F59E0B',
        'brand-slate': '#F8FAFC',
        'brand-muted': '#64748B',
        'brand-off-white': '#F4F6FA',
        'brand-deep-navy': '#060E1A',
        'glass': 'rgba(255,255,255,0.06)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(27,79,216,0.25)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.20)',
        'card-light': '0 4px 24px rgba(10,22,40,0.08)',
        'card-light-hover': '0 12px 40px rgba(10,22,40,0.14)',
        'card-dark': '0 8px 32px rgba(0,0,0,0.3)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
