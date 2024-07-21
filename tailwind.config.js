/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        'Niconne': ['Niconne', 'sans-serif']
      },
      colors: {
        'mint': '#77E4C8',
        'mint-skyblue': '#36C2CE',
        'deep-skyblue': '#478CCF',
        'blue-violet': '#4535C1',
        'near-black': '#919191',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}