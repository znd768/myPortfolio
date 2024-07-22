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
        'light-theme-white': '#ECF9FF',
        'light-theme-text': '#3D3D3D',
        'light-theme-1': '#EEF1FF',
        'light-theme-2': '#D2DAFF',
        'light-theme-3': '#AAC4FF',
        'light-theme-4': '#B1B2FF',
        'dark-theme-black': '#1B262C',
        'dark-theme-1': '#27496D',
        'dark-theme-2': '#0C7B93',
        'dark-theme-3': '#00A8CC',
        'dark-theme-4': '#142850',
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