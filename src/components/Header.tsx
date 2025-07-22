// src/components/Header.tsx
import Container from "./ui/Container";
import Link from "./ui/Link"; 
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 shadow transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-sm"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <Container className="py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <a href="/" className="transition-all duration-500 hover:scale-110 inline-block">
            Miau
          </a>
        </h1>
        <nav className="space-x-8">
          <Link
            to="/"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/services"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Servicios
          </Link>
          <Link
            to="/products"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full  after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Productos
          </Link>
          <Link
            to="/contact"
            variant="primary"
            className="relative inline-block after:content-[''] after:block after:h-[2px] after:w-full after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
