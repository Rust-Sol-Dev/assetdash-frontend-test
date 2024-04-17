/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"],
      },
      colors: {
        primary: "#21ce99",
      },
    },
  },
  plugins: [],
};
