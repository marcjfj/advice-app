/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': 'hsl(193, 38%, 86%)',
      'accent': 'hsl(150, 100%, 66%)',
      'gray-light': 'hsl(217, 19%, 38%)',
      'gray-dark': 'hsl(217, 19%, 24%)',
      'blue-dark': 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '2xl': `${28 / 16}rem`,
      },
      letterSpacing: {
        'omg': '.3em',
      }
    },
  },
  plugins: [],
}
