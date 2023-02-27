/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cormorant-garamond": [
          "Cormorant Garamond",
          "serif",
          ...defaultTheme.fontFamily.serif,
        ],
        "open-sans": [
          "Open Sans",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: "#19263A",
        secondary: "#fc495d",
        accent1: "#828282",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
