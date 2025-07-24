import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import BentoGrid from "../components/ui/BentoGrid";
import TestAnim from "./TestAnim";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <BentoGrid />
      <TestAnim />
    </>
  );
}
