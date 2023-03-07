/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-peach': '#FFC9B5',
        'pastel-pink': '#F7B1AB',
        'pastel-chocolate': '#D8AA96',
        'pastel-grey': '#807182',
        'pastel-green': '#C7D3BF',
      },
    },
  },
  plugins: [],
}
