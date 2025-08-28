const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config')} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      // },

         colors: {
        'primary': '#102A55',
        'primary-focus': '#1C355E',
        'secondary': '#005CB9',
        'accent': '#00AE42',
        'accent-hover': '#008c35',
        'light-bg': '#F7F9FC',
        'text-primary': '#102A55',
        'text-secondary': '#4A5568',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // NEW: Add the Ken Burns effect keyframes
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, 1%)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        // NEW: Add the Ken Burns animation utility
        kenburns: 'kenburns 10s ease-out forwards',
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
