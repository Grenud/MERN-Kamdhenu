/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#067d5f',
        'secondary':'#222f3e',
        'accent1':'#d35400',
        'accent2':'#c0392b',
        'light':'#bdc3c7',
        'dark-primary':'#013220',
        'green-light':'#15803d',
        'green-dark':'#14532d'
      },
      fontFamily: {
        libre: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },  
  plugins: [],
}