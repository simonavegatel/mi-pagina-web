import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MouseAnim() {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calcula la posición relativa al centro de la ventana
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      // Anima el SVG hacia esa posición (divídelo para que no se mueva tanto)
      gsap.to(svgRef.current, {
        x: x / 10,
        y: y / 10,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        ref={svgRef}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <circle cx="60" cy="60" r="50" fill="#38bdf8" />
      </svg>
    </div>
  );
}
