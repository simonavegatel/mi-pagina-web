// src/components/Footer.tsx
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Mi Web. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
