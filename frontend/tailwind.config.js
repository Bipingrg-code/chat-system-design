/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors:{
          primary: '#1476ff',
          secodary: '#f3f5ff',
          light: '#f9faf5'
        }
      },
    },
    plugins: [],
}

