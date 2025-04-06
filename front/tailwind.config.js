/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // Habilitar el modo oscuro con clase 'dark'
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)", // Usamos la variable definida en global.css
        text: "var(--color-text)", // Usamos la variable definida en global.css
        primary: "var(--color-primary)", // Usamos la variable definida en global.css
        error: "var(--color-error)", // Usamos la variable definida en global.css
        buttonHover: "var(--color-button-hover)", // Usamos la variable definida en global.css
        navbarBackground: "var(--navbar-background)", // Agregar la variable para navbar
        footerBackground: "var(--footer-background)", // Agregar la variable para footer
      },
    },
  },
  plugins: [],
};
