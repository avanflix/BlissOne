"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
            <a
        href="https://wa.me/+918374339608"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>
      {/* <Contact /> */}
    </>
  );
}