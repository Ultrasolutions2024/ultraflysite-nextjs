/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine', 'serif'], // Make sure it's inside 'extend'
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        marquee: "marquee 25s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 6s infinite",
      },
      clipPath: {
        hexagon:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        borderRadius: "12px",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-hexagon": {
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        },
      });
    },
  ],
};
