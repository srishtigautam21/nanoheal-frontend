// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/*/.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleColor: "#8d27ae",
        pinkColor: "#d9176d",
        greyColor: "#f3f3f3",
        whiteColor: "#fff",
        blackColor: "#010101",
        lightBlackColor: "717171",
      },
      backgroundImage: {
        library: "url('/src/images/books-svg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
