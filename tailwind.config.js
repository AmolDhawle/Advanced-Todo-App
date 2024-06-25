/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#e5e7eb',
      },
      opacity: {
        50: '0.5',
      },
      cursor: {
        notAllowed: 'not-allowed',
      },
      
    },
  },
  plugins: [],
}