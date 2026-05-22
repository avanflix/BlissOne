"use client";

import { useState } from "react";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose";
import Projects from "@/components/sections/Projects";
import VisionMission from "@/components/sections/VisionMission";
import Leadership from "@/components/sections/Leadership";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import LeadPopup from "../components/ui/LeadPopup";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <>
      <LeadPopup
        open={popupOpen}
        setOpen={setPopupOpen}
      />

      <Hero
        openPopup={() => setPopupOpen(true)}
      />

      <About />
      <WhyChoose openPopup={() => setPopupOpen(true)} />
      <Projects openPopup={() => setPopupOpen(true)} />
      <VisionMission />
      <Leadership />
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}