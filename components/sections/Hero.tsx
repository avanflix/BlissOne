"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero({
  openPopup,
}: {
  openPopup: () => void;
}) {
  return (
    <section id="home" className="bg-white">
      {/* Top Image */}
      <section
        id="home"
        className="relative h-screen overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bliss2.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Logo */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
          <img
            src="/logos/logo2.png"
            alt="Bliss One"
            className="h-18 md:h-18 bg-white rounded-lg p-2"
          />
        </div>

        <div className="absolute top-[10%] left-0 w-full z-20 px-16 ">
          <div className="flex items-center justify-between">

            {/* Left */}
            <div className="text-left">
              <h2 className={`${playfair.className} text-red-500 text-xl italic font-semibold`}>
                Boundless Luxury
              </h2>
              <p className={`${playfair.className} text-white text-lg italic`}>
                for Everyone
              </p>
            </div>

            {/* Center */}
            <div className="flex items-center gap-6 flex-1 max-w-[700px] mx-10">
              <div className="flex-1 h-[1px] bg-white/70" />

              <div className="text-center whitespace-nowrap">
                <h1 className={`${playfair.className} text-white text-3xl italic`}>
                  Your Bliss Our Passion
                </h1>
                <h2 className={`${playfair.className} text-red-500 text-2xl italic`}>
                  Feels good
                </h2>
              </div>

              <div className="flex-1 h-[1px] bg-white/70" />
            </div>

            {/* Right */}
            <div className="text-right">
              <h2 className={`${playfair.className} text-red-500 text-xl italic font-semibold`}>
                2 & 3 BHK Apartments
              </h2>

              <p className={`${playfair.className} text-white text-lg italic`}>
                C + G + 5 Floors
              </p>

              <p className={`${playfair.className} text-white text-lg italic`}>
                25+ Amenities
              </p>

              <div className="flex items-center justify-end gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-red-500"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>

                <span className={`${playfair.className} text-white text-lg italic`}>
                  Yamnampet, Ghatkesar
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

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