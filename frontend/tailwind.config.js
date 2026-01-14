/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        utstaybro: ["UT Staybro", "sans-serif"],
        perandory: ["Perandory", "sans-serif"],
        grunge: ["Grunge Decade", "sans-serif"],
        stacksans: ["Stack Sans", "sans serif"]
      }
    },
  },
  plugins: [],
}
