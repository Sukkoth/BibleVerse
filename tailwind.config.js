/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: "#84AC77",
        "primary-shade": "#98c789",
        secondary: "#7A86F8",
        "shade-100": "#FAFAFA",
        "shade-200": "#EFF0FD",
        "shade-300": "#6C736F",
        "shade-400": "#5C5D67",
        "shade-500": "#09090B",
        "shade-600": "#111111",
      },
    },
  },
  plugins: [],
};
