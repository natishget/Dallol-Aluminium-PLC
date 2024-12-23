const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        primary: 'rgb(253, 225, 47)',
        secondary: 'rgb(0,0,0)',
        tertiary: 'rgb(40,41,45)',
        quaternary: 'rgb(120,121,125)',
        quinary: 'rgb(255,255,255)',
        trans: 'rgba(0,0,0,0.0)',
        primary_t: 'rgba(253, 225, 47, 0.5)',
        secondary_t: 'rgba(0,0,0,0.85)'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideToLeft: {
          '0%': { 
            transform: 'translateX(100%)' 
          },
          '100%': { 
            transform: 'translateX(0)' 
          },
        },
        slideForward: {
          '0%': {
            transform: 'scale(0.5) translateZ(-100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) translateZ(0)',
            opacity: 1,
          },
        },
        slideForward2: {
          '0%': {
            transform: 'scale(0.5) rotate(45deg) translateZ(-100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) rotate(45deg) translateZ(0)',
            opacity: 1,
          },
        },
        slideForward2Hover: {
          '0%': {
            transform: ' rotate(45deg) ',
            opacity: 0,
          },
          '100%': {
            transform: ' rotate(0deg)',
            opacity: 1,
          },
        },
      },
      animation: {
        slide: 'slide 1500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slide2: 'slide 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideForward: 'slideForward 1500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideForward1: 'slideForward2 1500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideForward2: 'slideForward2 1650ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 100ms both',
        slideForward3: 'slideForward2 1700ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 250ms both',
        slideForward4: 'slideForward2 1850ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 400ms both',
        slideForward5: 'slideForward2 1900ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 550ms both',
        slideForward6: 'slideForward2 2050ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 700ms both',
        slideForward7: 'slideForward2 2100ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 850ms both',
        slideForward8: 'slideForward2 2250ms cubic-bezier(0.250, 0.460, 0.450, 0.940) 1000ms both',
        slideForward2Hover: 'slideForward2Hover 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)  both',
        slideToLeft: 'slideToLeft 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideToLeft1: 'slideToLeft 1500ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideToLeft2: 'slideToLeft 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)  both',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(function ([key, val]) {
      return [`--${key}`, val];
    })
  );

  addBase({
    ":root": newVars,
  });
}
