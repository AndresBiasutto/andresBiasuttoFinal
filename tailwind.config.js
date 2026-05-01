/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#D9D1C7",
          lightBackground: "#BFB9AE",
          text: "#0D0000",
          primary: "#403D39",
          secondary: "#8C8881",
          accent: "#F2C288",
          red: "#FDA4AF",
          redHover: "#F87171",
          blue: "#7DD3FC",
          blueHover: "#38BDF8",
        },
        dark: {
          background: "#0D0D0D",
          darkBackground: "#404040",
          text: "#F2F2F2",
          primary: "#BFBFBF",
          secondary: "#737373",
          accent: "#107361",
          red: "#991B1B",
          redHover: "#7F1D1D",
          blue: "#075985",
          blueHover: "#0C4A6E",
        },
      },
      fontFamily: {
        londrina: ["Londrina Sketch", "cursive"],
        caveat: ["Caveat", "cursive"],
        unica: ["Unica One", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};