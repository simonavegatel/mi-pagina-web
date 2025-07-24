// src/components/Header.tsx
import Container from "./ui/Container";
import Link from "./ui/Link";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/20 backdrop-blur-sm shadow-md text-foreground"
          : isHome
            ? "bg-transparent text-white"
            : "bg-transparent text-foreground"
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
            className={`
              transition-colors duration-500 ease-in-out
              ${scrolled || !isHome
                ? "text-foreground hover:text-gray-700"
                : "text-white hover:text-gray-300"
              }
            `}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className={`
              transition-colors duration-500
              ${scrolled || !isHome
                ? "text-foreground hover:text-gray-700"
                : "text-white hover:text-gray-300"
              }
            `}
          >
            Sobre nosotros
          </Link>
          <Link
            to="/contact"
            className={`
              transition-colors duration-500
              ${scrolled || !isHome
                ? "text-foreground hover:text-gray-700"
                : "text-white hover:text-gray-300"
              }
            `}
          >
            Contacto
          </Link>
        </nav>
      </Container>
    </header>
  );
}
