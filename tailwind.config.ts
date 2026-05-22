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
        'brand-navy': '#0F172A',
        'brand-blue': '#0D6EFD',
        'brand-sky': '#0A58CA',
        'brand-gold': '#FF6B00',
        'brand-slate': '#F8F9FA',
        'brand-muted': '#4B5563',
        'brand-off-white': '#F8F9FA',
        'brand-deep-navy': '#0F172A',
        'glass': 'rgba(0, 0, 0, 0.02)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(13,110,253,0.1)',
        'glow-gold': '0 0 20px rgba(255,107,0,0.1)',
        'card-light': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-light-hover': '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.05)',
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
