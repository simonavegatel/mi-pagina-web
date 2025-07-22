// src/components/Header.tsx
import Container from "./ui/Container";
import Link from "./ui/Link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <Container className="py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="/" className="transition-all duration-500 hover:scale-110 inline-block">
            Miau
          </a>
        </h1>
        <nav className="space-x-8">
          <Link
            href="#features"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Inicio
          </Link>
          <Link
            href="#contact"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Sobre nosotros
          </Link>
          <Link
            href="#contact"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Servicios
          </Link>
          <Link
            href="#contact"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Productos
          </Link>
          <Link
            href="#contact"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
