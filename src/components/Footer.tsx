// src/components/Footer.tsx
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 mt-20">
      <Container className="text-center">
        <p>
          &copy; {new Date().getFullYear()} {' '}
           <a
            href="https://cursosluisvives.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary"
          > 
             miau
          </a>. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
