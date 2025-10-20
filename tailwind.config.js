/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "libre-regular": [
          "Libre Baskerville Regular",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        "libre-bold": [
          "Libre Baskerville Bold",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        "space-regular": [
          "SpaceGrotesk Regular",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        "space-bold": ["SpaceGrotesk Bold", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        paper: "#F6E7D2",
        tint: "#211D14",
      },
    },
  },
  plugins: [],
};
