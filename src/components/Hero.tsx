// src/components/Hero.tsx
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero({ className }: { className?: string }) {
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
        <Button variant="accent" className="mt-6">Empieza ahora</Button>
      </Container>
    </section>
  );
}
