/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mybg: 'rgba(0,0,0,0.85)',
      myellow: 'rgb(253, 225, 47)',
      mybg2: 'rgba(0,0,0,0)',
      myellow2: 'rgba(253, 225, 47, 0.5)',
      
    },
  },
  plugins: [],
}

