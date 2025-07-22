/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        winky: ['"Winky Rough"', 'sans-serif'],
      },
      colors: {
        primary: "#120023",     
        secondary: "#0cca98", 
        accent: "#fd2eb3",     
        muted: "#f3f4f6",        // gris claro para fondos
        info: "#0ea5e9",         // azul claro para info
        success: "#22c55e",      // verde para éxito
        warning: "#facc15",      // amarillo para advertencias
        error: "#ef4444",        // rojo para errores
        background: "#fff",
        foreground: "#111827",
        darkbg: "#18181b",
        darkfg: "#f3f4f6",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
