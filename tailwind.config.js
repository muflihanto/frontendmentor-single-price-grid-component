/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Karla", "sans-serif"],
      },
      colors: {
        primary: {
          cyan: "hsl(179, 62%, 43%)",
          yellow: "hsl(71, 73%, 54%)",
        },
        base: {
          100: "hsl(204, 43%, 93%)",
          200: "hsl(218, 22%, 67%)",
        },
      },
    },
  },
  plugins: [],
};
