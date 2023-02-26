/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19263A",
        secondary: "#fc495d",
        accent1: "#828282",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
