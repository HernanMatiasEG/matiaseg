/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#623CEA",
        dprimary: "#FBFCFF",
        dsecondary: "#274156",
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

