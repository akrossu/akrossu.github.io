const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"DinkieBitmap', 'Zpix', 'sans-serif'],
      DinkieBitmap: ['"DinkieBitmap"'],
      Zpix: ['"zpix"'],
    },
    extend: {
      colors: {
        "dark-purple": "var(--dark-purple)",
        "purple": "var(--purple)",
        "dark-blue": "var(--dark-blue)",
        "dark-cyan": "var(--dark-cyan)",
        "cyan": "var(--cyan)",
        "light-cyan": "var(--light-cyan)",
        "yellow": "var(--yellow)",
        "orange": "var(--orange)",
        "yellow-orange": "var(--yellow-orange)",
        "red": "var(--red)",
        "pink": "var(--pink)",
        "magenta": "var(--magenta)"
      },
    },
  },
  plugins: [],
}

