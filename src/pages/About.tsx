import Container from "../components/ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faHandshake, faSeedling } from "@fortawesome/free-solid-svg-icons";

// Datos del equipo
const team = [
  {
    name: "Ana López",
    role: "Desarrolladora Frontend",
    img: "/src/assets/ana.jpg",
  },
  {
    name: "Carlos Ruiz",
    role: "Diseñador UI/UX",
    img: "/src/assets/carlos.jpg",
  },
  {
    name: "Lucía Gómez",
    role: "Project Manager",
    img: "/src/assets/lucia.jpg",
  },
];

// Valores de la empresa con iconos SVG
const values = [
  {
    icon: faLightbulb,
    title: "Innovación",
    desc: "Siempre buscamos nuevas ideas y soluciones creativas.",
  },
  {
    icon: faHandshake,
    title: "Colaboración",
    desc: "El trabajo en equipo es la base de nuestro éxito.",
  },
  {
    icon: faSeedling,
    title: "Crecimiento",
    desc: "Nos esforzamos por mejorar cada día.",
  },
];

export default function About() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-white via-accent/10 to-white min-h-screen">
      {/* Título principal */}
      <h1 className="font-winky text-6xl font-bold mb-6 flex justify-center items-center text-primary drop-shadow">
        Sobre nosotros
      </h1>
      <Container>
        {/* Descripción principal */}
        <p className="text-lg text-foreground/80 flex justify-center items-center mb-10 max-w-2xl mx-auto text-center">
          Somos un equipo de profesionales apasionados por la tecnología y el diseño. Nos dedicamos a crear experiencias web modernas, accesibles y atractivas, y a ayudar a otros a crecer en el mundo digital.
        </p>

        {/* Separador decorativo */}
        <div className="flex justify-center mb-12">
          <span className="inline-block w-24 h-1 bg-accent rounded-full"></span>
        </div>

        {/* Sección: Nuestro equipo */}
        <h2 className="text-3xl font-extrabold text-primary text-center mb-8 tracking-tight">
          Nuestro equipo
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/90 rounded-3xl shadow-md border border-primary/10 p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-accent group"
            >
              {/* Imagen con efecto de color al hacer hover */}
              <div className="relative group mb-4">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/40 to-primary/30 blur-md
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-white relative z-10 shadow"
                />
              </div>
              <h3 className="font-bold text-xl text-primary mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Separador decorativo */}
        <div className="flex justify-center mb-12">
          <span className="inline-block w-16 h-1 bg-primary rounded-full"></span>
        </div>

        {/* Sección: Nuestros valores */}
        <h2 className="text-3xl font-extrabold text-primary text-center mb-8 tracking-tight">
          Nuestros valores
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white/90 rounded-3xl shadow-md border border-primary/10 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent"
            >
              <span className="mb-4 text-accent">
                <FontAwesomeIcon icon={val.icon} size="2x" />
              </span>
              <h4 className="font-semibold text-lg mb-2 text-accent">{val.title}</h4>
              <p className="text-center text-foreground/80">{val.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
