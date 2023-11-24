/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:{
          default: "#f7be81",
          hover:"ffd488",
        },
        secondary: {
          default: "#2e2e2e"
        },
        ordinary: {
          default: "##74777b"
        }
      }
    },
  },
  plugins: [],
}

