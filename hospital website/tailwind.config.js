/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      playfair: ['Playfair Display', 'serif'],
      roboto: ['Roboto Slab', 'serif'],
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

