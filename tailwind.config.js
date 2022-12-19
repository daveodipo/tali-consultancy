/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tali1: "#08111f",
        tali2: "#102530",
        tali3: "#26695e"
      },
    },
  },
  plugins: [],
};
