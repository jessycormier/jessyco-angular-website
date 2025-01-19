/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"], // Modern monospace font with ligatures
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
