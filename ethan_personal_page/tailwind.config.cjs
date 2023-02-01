/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Background.jpg')",
        'footer-texture': "url('./src/assets/Background.jpg')",
      }
    },
  },
  plugins: [],
}
