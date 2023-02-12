/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      sm: "764px",
      xl: "1280px",
      lg: "1010px",
      md: "768px",
    },
  },
  plugins: [],
};
