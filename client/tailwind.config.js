/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#929190",
          100: "#7c7b7a",
          200: "#666564",
          300: "#504f4e",
          400: "#3a3938",
          500: "#252422",
          600: "#21201e",
          700: "#1d1c1b",
          800: "#191917",
          900: "#161514",
        },
        silver: {
          50: "#e5e2dc",
          100: "#e0dcd5",
          200: "#dbd6ce",
          300: "#d6d0c7",
          400: "#d1cac0",
          500: "#ccc5b9",
          600: "#b7b1a6",
          700: "#a39d94",
          800: "#8e8981",
          900: "#7a766f",
        },
        orange: {
          50: "#f7bea9",
          100: "#f39e7e",
          200: "#f18e68",
          300: "#ef7e52",
          400: "#ed6e3d",
          500: "#eb5e28",
          600: "#d35424",
          700: "#bc4b20",
          800: "#a4411c",
          900: "#8d3818",
        },
      },
    },
  },
  plugins: [],
};
