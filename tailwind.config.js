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
      },
      colors: {
        'regal-blue': '#273171',

      },
    },
  },
  plugins: [],
}

