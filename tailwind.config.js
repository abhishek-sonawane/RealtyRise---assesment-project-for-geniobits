/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        AppYellow:{
          100:'#F2E251'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}