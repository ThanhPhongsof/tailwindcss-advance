/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.html", "./*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
      },
    },
  },
  plugins: [],
};
