/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Un ejemplo de color personalizado
        secondary: "#9333EA", // Otro color personalizado
        customGreen: "#10B981", // Un color adicional
        // Agrega más colores según tus necesidades
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
