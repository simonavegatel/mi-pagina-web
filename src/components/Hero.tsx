// src/components/Hero.tsx

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Configuración de las burbujas
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
  // Un array de refs, uno para cada burbuja
  const bubbleRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      // Mueve cada burbuja con un factor diferente
      bubbleRefs.current.forEach((bubble, i) => {
        if (bubble) {
          gsap.to(bubble, {
            x: x / bubbles[i].factor,
            y: y / bubbles[i].factor,
            duration: 0.7,
            ease: "power3.out"
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex items-center bg-[url('/src/assets/hero.jpg')] bg-cover bg-center ${className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Burbujas */}
      {bubbles.map((bubble, i) => (
        <svg
          key={i}
          ref={el => { bubbleRefs.current[i] = el; }}
          width={bubble.size}
          height={bubble.size}
          viewBox={`0 0 ${bubble.size} ${bubble.size}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute pointer-events-none z-0 ${bubble.blur}`}
          style={{
            left: bubble.left,
            top: bubble.top,
          }}
        >
          <circle
            cx={bubble.size / 2}
            cy={bubble.size / 2}
            r={bubble.size / 2}
            fill="#FD2EB3"
            fillOpacity={bubble.opacity}
          />
        </svg>
      ))}
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
    </section>
  );
}
