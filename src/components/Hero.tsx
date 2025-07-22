// src/components/Hero.tsx
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-4">Bienvenido a Mi Página</h2>
        <p className="text-lg text-gray-600 mb-6">
          Aquí puedes aprender, construir y explorar con React y Tailwind.
        </p>
        <Button>Empieza ahora</Button>
      </Container>
    </section>
  );
}
