/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-l': 'linear-gradient(to left, #000000 0%, #000000 100%, #ffffff 100%)',
      },
    },
  },
  plugins: [require("daisyui")],
}