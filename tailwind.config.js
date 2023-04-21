/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '890': '55rem',
        '1220': '76rem',
        '264': '16.5rem',
        '250': '15.625rem',
      },
      height: {
        '300': '18.75rem',
        '242': '15.125rem',
        '1100': '68.75rem',
        '133': '8.3125'
      },
      colors: {
        'regal-blue': '#273171',

      },
    },
  },
  plugins: [],
}

