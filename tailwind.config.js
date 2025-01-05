/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-red": "#FF5151",
        "secondary-subtitle-color": "#686868",
        "background-color": "#FAFAFA",
        "border-input": "#E0E0E0",
        "primary-subtitle-color": "#686868",
        "secondary-title-color": "#303030",
      },
    },
  },
  plugins: [],
};

