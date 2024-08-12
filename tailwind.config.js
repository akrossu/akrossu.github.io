/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        text:'var(--color-text)',
        header:'var(--color-header)',
        link:'var(--color-link)',
        border:'var(--color-border)',
      }
    },
  },
  plugins: [],
}

