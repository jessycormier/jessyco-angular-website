/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Define monochrome shades
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace"], // Modern monospace font with ligatures
      },
    },
    plugins: [
      "prettier-plugin-tailwindcss",
      "@tailwindcss/typography",
    ],
  },
};
