// src/components/Hero.tsx

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
  

    // Animación al mover el mouse
    const handleMouseMove = (e: MouseEvent) => {
      // Calcula la posición relativa al centro de la ventana
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      // Anima el SVG hacia esa posición (ajusta el divisor para más/menos movimiento)
      gsap.to(svgRef.current, {
        x: x / 20,
        y: y / 20, // Mantiene el desplazamiento de scroll
        duration: 0.5,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex items-center bg-[url('/src/assets/hero.jpg')] bg-cover bg-center ${className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Contenido centrado */}
      <div className="relative flex flex-col justify-center items-center text-center w-full h-screen z-10">
        <h1 className="font-winky text-6xl font-bold mb-4 text-white">
          Miau miau miau miau
        </h1>
        <p className="text-xl text-white mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        <button
          className="mt-6 bg-accent text-white font-semibold py-3 px-8 rounded-lg shadow-sm
                     hover:bg-primary hover:shadow-md hover:scale-105
                     transition-all duration-200 active:animate-pulse"
        >
          Empieza ahora
        </button>
      </div>
      {/* SVG flotante */}
      <svg
        ref={svgRef}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/4 top-1/4 -translate-x-1/2 z-20"
        style={{ pointerEvents: "none" }}
      >
        <circle cx="60" cy="60" r="50" fill="#38bdf8" />
      </svg>
    </section>
  );
}
