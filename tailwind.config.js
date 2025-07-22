/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#120023",     
        secondary: "#0cca98", 
        accent: "#fd2eb3",     
        muted: "#f3f4f6",        // gris claro para fondos
        info: "#0ea5e9",         // azul claro para info
        success: "#22c55e",      // verde para éxito
        warning: "#facc15",      // amarillo para advertencias
        error: "#ef4444",        // rojo para errores
        background: "#ffffff",   // fondo principal
        foreground: "#111827",   // texto principal
      },
    },
  },
  plugins: [],
}
