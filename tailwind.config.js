/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{md,njk}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
