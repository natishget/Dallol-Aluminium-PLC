/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'logoC': '#F4FF00',
        'glass': 'rgba(255, 255, 255, .1)'
      },
    },
  },
  plugins: [],
}

