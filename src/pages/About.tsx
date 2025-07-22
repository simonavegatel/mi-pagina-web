import Container from "../components/ui/Container";

const team = [
  {
    name: "Ana López",
    role: "Desarrolladora Frontend",
    img: "/src/assets/team1.jpg",
  },
  {
    name: "Carlos Ruiz",
    role: "Diseñador UI/UX",
    img: "/src/assets/team2.jpg",
  },
  {
    name: "Lucía Gómez",
    role: "Project Manager",
    img: "/src/assets/team3.jpg",
  },
];

const values = [
  {
    icon: "💡",
    title: "Innovación",
    desc: "Siempre buscamos nuevas ideas y soluciones creativas.",
  },
  {
    icon: "🤝",
    title: "Colaboración",
    desc: "El trabajo en equipo es la base de nuestro éxito.",
  },
  {
    icon: "🚀",
    title: "Crecimiento",
    desc: "Nos esforzamos por mejorar cada día.",
  },
];

export default function About() {
  return (
    <section className="pt-20 pb-16">
      <h1 className="font-winky text-6xl font-bold mb-10 flex justify-center items-center">
        Sobre nosotros
      </h1>
      <Container>
        <p className="text-lg text-foreground flex justify-center items-center mb-10">
          Somos un equipo de profesionales apasionados por la tecnología y el diseño.
        </p>

        {/* Separador decorativo */}
        <div className="flex justify-center mb-12">
          <span className="inline-block w-24 h-1 bg-accent rounded-full"></span>
        </div>

        {/* Miembros del equipo */}
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Nuestro equipo</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-sm border border-primary/20 p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-md hover:border-accent"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-accent shadow"
              />
              <h3 className="font-bold text-lg text-primary mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Valores */}
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Nuestros valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-3xl shadow-sm border border-primary/20 p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-accent"
            >
              <span className="text-4xl mb-3 transition-transform duration-300 hover:scale-125">{val.icon}</span>
              <h4 className="font-semibold text-lg mb-2">{val.title}</h4>
              <p className="text-center">{val.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
