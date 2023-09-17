/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',    // Small devices (portrait phones)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
    },
  },
  plugins: [],
}