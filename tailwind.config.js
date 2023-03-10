/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8B2D",
        secondary: "#090D48",
        title: "##3B1408",
        content: "#3F3F3F",
        bg: "#FFF3EF",
      },
      fontFamily: {
        title: ['"Ageo"', "sans-serif"],
        content: ['"Ageo"', "sans-serif"],
        Impact: ['"Maximum Impact"', "sans-serif"],
      },
      screens: {
        desktop1440: { max: "1440px" },

        desktop: { max: "1279px" },

        miniLaptop: { max: "1278px" },

        laptop: { max: "1024px" },

        tablet: { max: "768px" },

        phone: { max: "639px" },
      },
    },
  },
  plugins: [],
};
