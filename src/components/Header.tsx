// src/components/Header.tsx
import Container from "./ui/Container";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <Container className="py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Web</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Características</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a>
        </nav>
      </Container>
    </header>
  );
}
