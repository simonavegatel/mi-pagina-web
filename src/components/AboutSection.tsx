import Container from "./ui/Container";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <Container className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-primary mb-4">Sobre nosotros</h3>
        <p className="text-lg text-foreground">
          Somos un equipo apasionado por la tecnología y el diseño, dedicados a crear experiencias web modernas, accesibles y atractivas. Nos encanta aprender, compartir y ayudar a otros a crecer en el mundo digital.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
          <img
            src="/about.jpg"
            alt="Nuestro equipo"
            className="w-40 h-40 object-cover rounded-full shadow-lg"
          />
          <div className="text-left max-w-md">
            <h4 className="font-semibold text-primary mb-2">Nuestra misión</h4>
            <p>
              Impulsar la creatividad y la innovación, ofreciendo soluciones web que marcan la diferencia y aportan valor real a nuestros clientes y usuarios.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
