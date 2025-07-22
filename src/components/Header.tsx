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
          >
            Inicio
          </Link>
          <Link
            to="/about"
            variant="primary"
           
          >
            Sobre nosotros
          </Link>
          <Link
            to="/services"
            variant="primary"
           
          >
            Servicios
          </Link>
          <Link
            to="/products"
            variant="primary"
           
          >
            Productos
          </Link>
          <Link
            to="/contact"
            variant="primary"
            
          >
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
