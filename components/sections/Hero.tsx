"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero({
  openPopup,
}: {
  openPopup: () => void;
}) {
  return (
    <section id="home" className="bg-white">
      {/* Top Image */}
      <div
        className="w-full h-[70vh] md:h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bliss.jpeg')",
        }}
      />

      {/* Content Below Image */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 py-16 md:py-20 max-w-5xl mx-auto"
      >
        <p className="uppercase tracking-[0.4em] text-sm font-bold text-red-800">
          Premium Real Estate Development
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-gray-900">
          Crafting Exceptional Living Experiences
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-gray-600">
          Bliss Ventures creates thoughtfully designed premium communities that
          combine modern architecture, strategic locations, and long-term
          investment value.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#projects">
            <Button variant="red">Explore Projects</Button>
          </a>

          <Button variant="red" onClick={openPopup}>
            Book Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}