/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {},
  },
  plugins: [],
}