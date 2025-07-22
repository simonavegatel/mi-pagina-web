// src/components/Features.tsx
import Container from "./ui/Container";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <Container>
        <h3 className="text-2xl font-bold text-center mb-10">Características</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded shadow text-center">
            <h4 className="font-bold mb-2">Rápido</h4>
            <p className="text-gray-600">Carga instantánea con Vite y React 19.</p>
          </div>
          <div className="p-6 border rounded shadow text-center">
            <h4 className="font-bold mb-2">Moderno</h4>
            <p className="text-gray-600">Diseño responsive con Tailwind.</p>
          </div>
          <div className="p-6 border rounded shadow text-center">
            <h4 className="font-bold mb-2">Escalable</h4>
            <p className="text-gray-600">Organización clara para proyectos grandes.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
