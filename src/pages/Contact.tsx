import Container from "../components/ui/Container";
import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  function validateField(name: string, value: string) {
    switch (name) {
      case "name":
        return value.trim() === "" ? "El nombre es obligatorio" : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Introduce un email válido";
      case "message":
        return value.trim() === "" ? "El mensaje es obligatorio" : "";
      default:
        return "";
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  return (
    <section className="pt-20">
      <h1 className="font-winky text-6xl font-bold mb-10 flex justify-center items-center">
        Contacto
      </h1>
      <Container>
        <p className="text-lg text-foreground flex justify-center items-center mb-10">
          ¿Tienes alguna pregunta o quieres trabajar con nosotros? ¡Escríbenos!
        </p>

        {/* Separador decorativo */}
        <div className="flex justify-center mb-12">
          <span className="inline-block w-24 h-1 bg-accent rounded-full"></span>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-sm border border-primary/20 p-6 flex flex-col items-center w-full md:w-1/3 min-h-[200px] min-w-[220px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-md hover:border-accent">
            <span className="text-3xl mb-2">📧</span>
            <h3 className="font-bold text-primary mb-1">Email</h3>
            <a href="mailto:info@tusitio.com" className="text-accent hover:underline">info@tusitio.com</a>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-primary/20 p-6 flex flex-col items-center w-full md:w-1/3 min-h-[200px] min-w-[220px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-md hover:border-accent">
            <span className="text-3xl mb-2">📞</span>
            <h3 className="font-bold text-primary mb-1">Teléfono</h3>
            <a href="tel:+34123456789" className="text-accent hover:underline">+34 123 456 789</a>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-primary/20 p-6 flex flex-col items-center w-full md:w-1/3 min-h-[200px] min-w-[220px] max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-md hover:border-accent">
            <span className="text-3xl mb-2">📍</span>
            <h3 className="font-bold text-primary mb-1">Dirección</h3>
            <p className="text-gray-600 text-center">Calle Ejemplo, 123<br />28000 Madrid</p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm border border-primary/20 p-8 flex flex-col gap-6 mb-12">
          <div>
            <label htmlFor="name" className="block text-primary font-semibold mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className={
                "w-full p-3 rounded-xl border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all " +
                (errors.name
                  ? "border-error"
                  : values.name
                  ? "border-success"
                  : "border-primary/20")
              }
              required
              onChange={handleChange}
              value={values.name}
            />
            {errors.name ? (
              <p className="text-red-500 text-sm">{errors.name}</p>
            ) :
              values.name && (
                <p className="text-success text-sm flex items-center gap-1">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Nombre válido
                </p>
              )
            }
          </div>
          <div>
            <label htmlFor="email" className="block text-primary font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={
                "w-full p-3 rounded-xl border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all " +
                (errors.email
                  ? "border-error"
                  : values.email
                  ? "border-success"
                  : "border-primary/20")
              }
              required
              onChange={handleChange}
              value={values.email}
            />
            {errors.email ? (
              <p className="text-red-500 text-sm">{errors.email}</p>
            ) :
              values.email && (
                <p className="text-success text-sm flex items-center gap-1">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Email válido
                </p>
              )
            }
          </div>
          <div>
            <label htmlFor="message" className="block text-primary font-semibold mb-1">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={
                "w-full p-3 rounded-xl border focus:border-accent focus:ring-2 focus:ring-accent outline-none transition-all " +
                (errors.message
                  ? "border-error"
                  : values.message
                  ? "border-success"
                  : "border-primary/20")
              }
              required
              onChange={handleChange}
              value={values.message}
            />
            {errors.message ? (
              <p className="text-red-500 text-sm">{errors.message}</p>
            ) :
              values.message && (
                <p className="text-success text-sm flex items-center gap-1">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Mensaje válido
                </p>
              )
            }
          </div>
          <button
            type="submit"
            className="bg-accent text-white font-bold py-3 px-8 rounded-xl shadow hover:bg-primary transition-colors"
          >
            Enviar mensaje
          </button>
        </form>

    
      </Container>
          {/* Mapa embebido fuera del Container */}
          <div className="w-screen max-w-full overflow-x-hidden relative left-1/2 right-1/2 -translate-x-1/2">
          <iframe
            title="Mapa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7038%2C40.4168%2C-3.7038%2C40.4168&amp;layer=mapnik"
            className="w-full max-w-full h-64 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </section>
  );
}