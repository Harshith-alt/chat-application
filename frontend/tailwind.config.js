/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Important for the theme toggle
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind where to look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
