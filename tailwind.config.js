/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#37AE4C",
          dark: "#2D923F",
        },
        gray: "#626262",
        secondary: "#78FF50",
        background: "#F5FFF2",
        white: "#FFFFFF",
        black: "#1D1D1D",
      },

      fontFamily: {
        heading: ["MaximaNouva", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1000px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
