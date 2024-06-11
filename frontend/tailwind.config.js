/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors
      colors: {
        primary: "#8A2BE2",
        secondary: "#E3D7FF",
        accent: "#FFC300",
        danger: "#D32F2F",
        warning: "#FFA000",
        success: "#388E3C",
        base: {
          50: "#ffffff",
          100: "#f9f9f9",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4d4d4d",
          900: "#333333",
          950: "#1a1a1a",
        },
      },

      // container config
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "0",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
