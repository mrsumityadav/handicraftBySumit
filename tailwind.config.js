/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-dark': 'var(--color-surface-dark)',
        main: 'var(--color-text)',
        muted: 'var(--color-text-light)',
        'dark-text': 'var(--color-dark-text)',
        themeBorder: 'var(--color-border)',
        'border-gold': 'var(--color-border-gold)',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 20px -2px rgba(198, 161, 91, 0.2)',
        dark: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
