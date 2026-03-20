/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        text:'var(--color-text)',
        header:'var(--color-header)',
        accent:'var(--color-accent)',
        link:'var(--color-link)',
        border:'var(--color-border)'
      },
      maxWidth: {
        content: 'var(--content-max-width)',
        nav: 'var(--nav-max-width)',
      }
    },
  },
  plugins: [],
}

