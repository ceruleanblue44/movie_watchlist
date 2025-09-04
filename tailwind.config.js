/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'], // ✅ override default sans
      inter: ['Inter', 'sans-serif'], // optional
    },
  },
  plugins: [],
}
