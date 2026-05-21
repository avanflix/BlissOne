"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-5xl"
      >
        <p className="uppercase tracking-[0.4em] text-sm mb-6 text-yellow-300">
          Premium Real Estate Development
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Crafting Exceptional Living Experiences
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-gray-200">
          Bliss Ventures creates thoughtfully designed premium communities that
          combine modern architecture, strategic locations, and long-term
          investment value.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button variant="gold">Explore Projects</Button>
          <Button variant="outline">Book Consultation</Button>
        </div>
      </motion.div>
    </section>
  );
}