/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#EAD7AC",
        "w-dark-gray": "#272727",
        "w-light-gray": "#747474",
        "gray-blue": "#020B18",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
