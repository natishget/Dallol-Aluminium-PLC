/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('src/img/herobg.jpg')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'logoC': '#F4FF00',
        'glass': 'rgba(255, 255, 255, .1)',
        'primary': 'rgb(253, 225, 47)',
        secondary: 'rgb(0,0,0)',
        tertiary: 'rgb(40,41,45)',
        quaternary: 'rgb(120,121,125)',
        quinary: 'rgb(255,255,255)',
        trans: 'rgba(0,0,0,0.0)',
        primary_t: 'rgba(253, 225, 47, 0.5)',
        secondary_t: 'rgba(0,0,0,0.85)'
      },
    },
  },
  plugins: [],
}

