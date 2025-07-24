// src/components/Hero.tsx
import Container from "./ui/Container";
import Button from "./ui/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ className }: { className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      console.log("Animando", boxRef.current);
      gsap.from(boxRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="hero"
        className={`relative flex items-center bg-[url('/src/assets/hero.jpg')] bg-cover bg-center ${className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Contenido */}
      <Container className="relative flex flex-col justify-center items-center text-center w-full h-screen">
        <h1 className="font-winky text-6xl font-bold mb-4 text-white">
          Miau miau miau miau
        </h1>
        <p className="text-xl text-white mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        <Button
          variant="accent"
          className="mt-6 bg-accent text-white font-semibold py-3 px-8 rounded-lg shadow-sm
                     hover:bg-primary hover:shadow-md hover:scale-105
                     transition-all duration-200 active:animate-pulse"
        >
          Empieza ahora
        </Button>
        <div ref={boxRef} style={{ width: 128, height: 128, background: "#38bdf8" }}></div>
      </Container>
    </section>
  );
}
