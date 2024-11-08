/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        marquee: 'marquee 25s linear infinite',
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 6s infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },  // Shift by 50% for smooth scrolling
        },
      }                    
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'], // Include only the light theme
  },
};
