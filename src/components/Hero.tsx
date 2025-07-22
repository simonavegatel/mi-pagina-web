// src/components/Hero.tsx
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero({ className }: { className?: string }) {
  return (
    <section
      className={`relative bg-black/50 bg-[url('/src/assets/miau.jpg')] bg-cover bg-center py-20 ${className}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Contenido */}
      <Container className="relative text-center">
        <h2 className="text-4xl font-bold mb-4">Bienvenido a Mi Página</h2>
        <p className="text-lg text-gray-600 mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        <Button>Empieza ahora</Button>
      </Container>
    </section>
  );
}
