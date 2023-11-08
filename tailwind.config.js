/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/banner.png')",
      },
      fontFamily: {
        "playpen-text": ["Playpen Sans", "cursive"],
        "libre-baskerville": ["Libre Baskerville", "serif"],
        "monsterrat-text": ["Montserrat", "sans-serif"],
        "Cabin-text": ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
