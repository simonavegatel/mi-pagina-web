// src/App.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
  <Header />
  <Hero className="flex-1" />
  {/* ...otros componentes */}
</div>
      <Features />
      <Footer />
    </>
  );
}
