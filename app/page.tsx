import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Projects from "@/components/sections/Projects";
import VisionMission from "@/components/sections/VisionMission";
import Leadership from "@/components/sections/Leadership";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Projects />
      <VisionMission />
      <Leadership />
      <Testimonials />
      <Contact />
    </>
  );
}