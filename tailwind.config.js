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
      animation: {
        float: "float 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
            filter: "sepia(0) drop-shadow(0 0 0 rgba(255,255,255,0.5))",
          },
          "50%": {
            transform: "translateY(-20px)",
            filter:
              "sepia(100%) drop-shadow(0 10px 20px rgba(255,255,255,0.5))",
          },
          "100%": {
            transform: "translateY(0)",
            filter: "sepia(0) drop-shadow(0 0 0 rgba(255,255,255,0.5))",
          },
        },
      },
    },
  },
  plugins: [],
};
