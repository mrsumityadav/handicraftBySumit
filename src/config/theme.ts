/**
 * Central Theme Tokens Configuration
 * All colors, fonts, spacing and borders reference CSS Variables.
 * Modify CSS variables in src/styles/globals.css or values here to update the entire application.
 */
export const theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    accentLight: 'var(--color-accent-light)',
    accentDark: 'var(--color-accent-dark)',
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
    surfaceDark: 'var(--color-surface-dark)',
    text: 'var(--color-text)',
    textMuted: 'var(--color-text-light)',
    darkText: 'var(--color-dark-text)',
    border: 'var(--color-border)',
    borderGold: 'var(--color-border-gold)',
  },
  fonts: {
    heading: 'var(--font-serif)',
    body: 'var(--font-sans)',
    arabic: 'var(--font-arabic)',
  },
  logo: {
    src: '/images/logo.png',
    original: '/images/logo-original.png',
    darkBg: '/images/logo-dark-bg.png',
    alt: 'AL QURESH HOME DECOR',
  }
};
