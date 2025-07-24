import Container from "./ui/Container";

// Puedes añadir una animación con AOS, Framer Motion o simplemente con Tailwind si quieres
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-accent/20 to-white"
    >
      <Container className="max-w-3xl mx-auto">
        {/* Tarjeta principal */}
        <div className="bg-white/90 rounded-3xl shadow-md p-10 flex flex-col items-center gap-8 border border-primary/10">
          {/* Título */}
          <h3 className="text-4xl font-extrabold text-primary mb-2 text-center">
            Sobre nosotros
          </h3>
          {/* Descripción principal */}
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            Somos un equipo apasionado por la tecnología y el diseño, dedicados a crear experiencias web modernas, accesibles y atractivas.<br />
            Nos encanta aprender, compartir y ayudar a otros a crecer en el mundo digital.
          </p>
          {/* Foto y misión */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-4 w-full">
            {/* Imagen con borde degradado y sombra */}
            <div className="relative group">
              {/* Fondo degradado, solo visible al hacer hover */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/40 to-primary/30 blur-md
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <img
                src="about.jpg"
                alt="Nuestro equipo"
                className="w-40 h-40 object-cover rounded-full border-4 border-white relative z-10"
              />
            </div>
            {/* Misión */}
            <div className="text-left max-w-md">
              <h4 className="font-semibold text-accent mb-2 text-xl">Nuestra misión</h4>
              <p className="text-foreground/90">
                Impulsar la creatividad y la innovación, ofreciendo soluciones web que marcan la diferencia y aportan valor real a nuestros clientes y usuarios.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
