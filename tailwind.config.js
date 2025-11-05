/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1320px',
      }
    },
    fontFamily: {
      rale: ['Raleway', 'sans-serif'],
      oxa: ['Oxanium', 'cursive'],
    },
    colors: {
      primary: '#F95C19',
      secondary: '#222132',
      white: '#ffffff',
    },
    screens: {
      lg: '1025px',
    },
  },
  plugins: [],
}

