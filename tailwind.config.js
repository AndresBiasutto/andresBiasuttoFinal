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
          redBtn: "#FDA4AF",
          redBtnHvr: "#F87171",
          blueBtn: "#7DD3FC",
          blueBtnHvr: "#38BDF8",
        },
        dark: {
          background: "#0D0D0D",
          darkBackground: "#404040",
          text: "#F2F2F2",
          primary: "#BFBFBF",
          secondary: "#737373",
          accent: "#107361",
          redBtn: "#991B1B",
          redBtnHvr: "#7F1D1D",
          blueBtn: "#075985",
          blueBtnHvr: "#0C4A6E",
        },
      },
      fontFamily: {
        londrina: ["Londrina Sketch", "cursive"], // Aquí agregas la fuente Londrina Sketch
        caveat: ["Caveat", "cursive"], // Aquí agregas la fuente Londrina Sketch
      },
    },
  },
  plugins: [],
};
