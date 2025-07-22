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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/20 backdrop-blur-sm shadow-md" // Fondo blanco con transparencia
        : "bg-transparent text-white" // Fondo transparente
        }`}
    >



      <Container className="py-4 flex justify-between items-center">
        <h1 className="font-winky text-xl font-bold transition-colors duration-0">
          <a href="/" className="transition-all duration-0 inline-block">
            Miau
          </a>
        </h1>
        <nav className="space-x-8">
          <Link
            to="/"

          >
            Inicio
          </Link>
          <Link
            to="/about"


          >
            Sobre nosotros
          </Link>
          <Link
            to="/services"


          >
            Servicios
          </Link>
          <Link
            to="/products"


          >
            Productos
          </Link>
          <Link
            to="/contact"


          >
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
