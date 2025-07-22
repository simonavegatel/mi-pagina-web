// src/components/Header.tsx
import Container from "./ui/Container";
import Link from "./ui/Link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <Container className="py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Miau</h1>
        <nav className="space-x-8">
          <Link href="#features" variant="primary">Inicio</Link>
          <Link href="#contact" variant="primary">Sobre nosotros</Link>
          <Link href="#contact" variant="primary">Servicios</Link>
          <Link href="#contact" variant="primary">Productos</Link>
          <Link href="#contact" variant="primary">Contacto</Link>
        </nav>
      </Container>
    </header>
  );
}
