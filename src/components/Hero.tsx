// src/components/Hero.tsx

// Importamos los hooks de React y la librería GSAP para animaciones
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registramos el plugin ScrollTrigger por si en el futuro quieres animaciones con scroll
// (aunque en este archivo actualmente solo usamos animación con el mouse)
gsap.registerPlugin(ScrollTrigger);

// ---
// Configuración de las burbujas:
// Cada objeto representa una burbuja con su tamaño, posición inicial, factor de movimiento (sensibilidad),
// nivel de desenfoque (blur) y opacidad. Todas usan el mismo color, pero puedes cambiarlo fácilmente.
// ---
const bubbles = [
  { size: 80, left: "8%", top: "18%", factor: 30, blur: 'blur-sm', opacity: 0.5, z: 0 },
  { size: 140, left: "75%", top: "22%", factor: 18, blur: 'blur-md', opacity: 0.4, z: 0 },
  { size: 60, left: "28%", top: "65%", factor: 25, blur: 'blur-sm', opacity: 0.6, z: 0 },
  { size: 100, left: "55%", top: "38%", factor: 22, blur: 'blur-lg', opacity: 0.3, z: 0 },
  { size: 50, left: "85%", top: "75%", factor: 20, blur: 'blur-sm', opacity: 0.5, z: 0 },
  { size: 90, left: "18%", top: "78%", factor: 28, blur: 'blur-md', opacity: 0.4, z: 0 },
  { size: 120, left: "40%", top: "15%", factor: 16, blur: 'blur-lg', opacity: 0.3, z: 0 },
  { size: 70, left: "60%", top: "70%", factor: 24, blur: 'blur-sm', opacity: 0.5, z: 0 },
  { size: 110, left: "30%", top: "35%", factor: 19, blur: 'blur-md', opacity: 0.4, z: 0 },
  { size: 100, left: "65%", top: "60%", factor: 21, blur: 'blur-lg', opacity: 0.3, z: 0 },
  { size: 80, left: "80%", top: "40%", factor: 27, blur: 'blur-sm', opacity: 0.5, z: 0 },
  { size: 60, left: "50%", top: "80%", factor: 26, blur: 'blur-md', opacity: 0.4, z: 0 },
];

export default function Hero({ className }: { className?: string }) {
  // Creamos un array de referencias (refs) para acceder a cada burbuja SVG y poder animarlas individualmente
  const bubbleRefs = useRef<(SVGSVGElement | null)[]>([]);

  // useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Esta función se ejecuta cada vez que mueves el mouse
    // Calcula la posición del mouse respecto al centro de la pantalla
    // y mueve cada burbuja con una sensibilidad diferente (factor)
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2; // Distancia horizontal desde el centro
      const y = e.clientY - window.innerHeight / 2; // Distancia vertical desde el centro
      // Recorremos todas las burbujas y las animamos
      bubbleRefs.current.forEach((bubble, i) => {
        if (bubble) {
          gsap.to(bubble, {
            x: x / bubbles[i].factor, // Movimiento horizontal suavizado
            y: y / bubbles[i].factor, // Movimiento vertical suavizado
            duration: 2,            // Duración de la animación (más alto = más suave)
            ease: "power3.out"        // Tipo de suavizado de la animación
          });
        }
      });
    };

    // Añadimos el event listener al mover el mouse
    window.addEventListener("mousemove", handleMouseMove);
    // Limpiamos el event listener al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex items-center bg-[url('/src/assets/hero.jpg')] bg-cover bg-center ${className}`}
    >
      {/* Overlay oscuro para dar contraste al texto */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* --- Burbujas decorativas --- */}
      {bubbles.map((bubble, i) => (
        <svg
          key={i}
          // Guardamos la referencia de cada burbuja en el array para animarla después
          ref={el => { bubbleRefs.current[i] = el; }}
          width={bubble.size}
          height={bubble.size}
          viewBox={`0 0 ${bubble.size} ${bubble.size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // Posicionamos cada burbuja absolutamente y le aplicamos desenfoque y z-index bajo
          className={`absolute pointer-events-none z-0 ${bubble.blur}`}
          style={{
            left: bubble.left, // Posición horizontal inicial
            top: bubble.top,   // Posición vertical inicial
          }}
        >
          <circle
            cx={bubble.size / 2} // Centro horizontal del círculo
            cy={bubble.size / 2} // Centro vertical del círculo
            r={bubble.size / 2}  // Radio del círculo
            fill="#FD2EB3"       // Color de la burbuja (puedes cambiarlo aquí)
            fillOpacity={bubble.opacity} // Opacidad individual para efecto 3D
          />
        </svg>
      ))}
      {/* --- Contenido principal del Hero (centrado y por encima de las burbujas) --- */}
      <div className="relative flex flex-col justify-center items-center text-center w-full h-screen z-10">
        {/* Título principal */}
        <h1 className="font-winky text-6xl font-bold mb-4 text-white">
          Miau miau miau miau
        </h1>
        {/* Subtítulo */}
        <p className="text-xl text-white mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        {/* Botón de llamada a la acción */}
        <button
          className="mt-6 bg-accent text-white font-semibold py-3 px-8 rounded-lg shadow-sm
                     hover:bg-primary hover:shadow-md hover:scale-105
                     transition-all duration-200 active:animate-pulse"
        >
          Empieza ahora
        </button>
      </div>
    </section>
  );
}
