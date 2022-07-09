/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': [
        "Roboto", ...defaultTheme.fontFamily.sans
      ],
    },
    colors: {
      background: '#09090A',
      elements: '#121214',
      divider: '#323238',
      title: '#E1E1E6',
      text: '#C4C4CC',
      text2: '#8D8D99',
      white: '#FFFFFF',
      green: '#00875F',
      greenDark: '#015F43',
      greenLight: '#00B37E',
      blue: '#81D8F7'
    },
    extend: {},
  },
  plugins: [],
}
