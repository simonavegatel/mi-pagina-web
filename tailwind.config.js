/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa",      // lila principal (Tailwind purple-400)
        secondary: "#f59e42",    // naranja secundario
        accent: "#f472b6",       // rosa para detalles (Tailwind pink-400)
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
