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
        <h2 className="text-4xl font-bold mb-4 text-white">Miau miau miau miau</h2>
        <p className="text-lg text-white mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        <Button variant="accent">Empieza ahora</Button>
      </Container>
    </section>
  );
}
