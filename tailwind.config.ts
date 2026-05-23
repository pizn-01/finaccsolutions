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
        'brand-navy-2': '#060E1A',
        'brand-blue': '#1B4FD8',
        'brand-sky': '#3B82F6',
        'brand-gold': '#F59E0B',
        'brand-slate': '#F4F6FA',
        'brand-muted': '#64748B',
        'brand-border': '#E8ECF4',
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
