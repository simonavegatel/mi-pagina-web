const bentoItems = [
  {
    title: "Sobre mí",
    description: "Conoce quién soy y mi historia.",
    className: "bg-accent text-white",
    content: null,
  },
  {
    title: "Proyectos",
    description: "Mira mis trabajos destacados.",
    className: "bg-primary text-white",
    content: null,
  },
  {
    title: "Lista de habilidades",
    description: null,
    className: "bg-secondary text-white",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>UI/UX</li>
      </ul>
    ),
  },
  {
    title: "Foto y texto",
    description: null,
    className: "bg-muted text-foreground flex-row items-center gap-3",
    content: (
      <>
        <img
          src="/about.jpg"
          alt="Foto"
          className="w-16 h-16 rounded-full object-cover border-2 border-accent"
        />
        <span>¡Hola! Soy Alex, desarrollador web creativo.</span>
      </>
    ),
  },
  {
    title: "Redes sociales",
    description: null,
    className: "bg-white text-primary flex-row items-center gap-3",
    content: (
      <div className="flex gap-3">
        <a href="#" title="Twitter" className="hover:text-accent">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg>
        </a>
        <a href="#" title="GitHub" className="hover:text-accent">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.07c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
        </a>
      </div>
    ),
  },
  {
    title: "¡Contáctame!",
    description: null,
    className: "bg-accent/10 text-accent flex-col justify-center items-center",
    content: (
      <button className="mt-2 px-4 py-2 rounded-lg bg-accent text-white font-bold hover:bg-primary transition-colors">Enviar mensaje</button>
    ),
  },
  {
    title: null,
    description: null,
    className: "bg-primary text-white flex items-center justify-center text-2xl font-bold italic",
    content: (
      <span>"La creatividad es la inteligencia divirtiéndose"</span>
    ),
  },
];

export default function BentoGrid() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-3 gap-4 p-4">
      {bentoItems.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-2xl p-6 shadow-sm flex flex-col justify-center items-start transition-transform duration-200 ${idx % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'} hover:shadow-md ${item.className}`}
        >
          {item.title && <h3 className="text-lg font-bold mb-2">{item.title}</h3>}
          {item.description && <p className="mb-2">{item.description}</p>}
          {item.content}
        </div>
      ))}
    </div>
  );
}
