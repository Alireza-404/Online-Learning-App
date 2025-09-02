/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBlackColor: "#1F1F39",
        primaryWhiteColor: "#EAEAFF",
        primaryBlueColor: "#3D5CFF",

        blackColor: "#2F2F42",
        inputBg: "#3E3E55",

        secondaryDarkColor: "#B8B8D2",
        secondaryLightColor: "#858597",
      },
    },
  },
  plugins: [],
};
