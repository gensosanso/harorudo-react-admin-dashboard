/** @type {import('tailwindcss').Config} */

const animate = require('tailwindcss-animate');
const scrollbar = require('tailwind-scrollbar');
const scrollbarHide = require('tailwind-scrollbar-hide');
;


const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const theme = require('tailwindcss/defaultTheme');

const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
});

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Exo 2'", ...theme.fontFamily.sans],
      },

      colors: {
        background: '#F4F7FE',

        dark: {
          DEFAULT: '#2B3674',
        },

        primary: {
          DEFAULT: '#3c8d65',
          50: '#f0f9f4',
          100: '#dcefe2',
          200: '#bbdfc8',
          300: '#8ec7a7',
          400: '#5daa81',
          500: '#3c8d65',
          600: '#2b7050',
          700: '#225a41',
          800: '#1d4835',
          900: '#193b2c',
          950: '#0d2119',
        },

        secondary: {
          DEFAULT: '#e1c22e',
        },

        danger: {
          DEFAULT: colors.red['400'],
        },

        muted: {
          DEFAULT: '#64748b',
          background: '#f1f5f9',
        },
      },
    },
  },

  plugins: [scrollbar({ nocompatible: true }), scrollbarHide, animate, capitalizeFirst],
};
