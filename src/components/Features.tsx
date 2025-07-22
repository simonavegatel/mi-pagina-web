// src/components/Features.tsx
import Container from "./ui/Container";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-muted">
      <Container>
        <h3 className="text-2xl font-bold text-center mb-10 text-primary">Características</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow bg-white text-center border border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-accent">
            <h4 className="font-bold mb-2 text-primary">Rápido</h4>
            <p className="text-foreground">Carga instantánea con Vite y React 19.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white text-center border border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-accent">
            <h4 className="font-bold mb-2 text-primary">Moderno</h4>
            <p className="text-foreground">Diseño responsive con Tailwind.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white text-center border border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-accent">
            <h4 className="font-bold mb-2 text-primary">Escalable</h4>
            <p className="text-foreground">Organización clara para proyectos grandes.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
