"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-bold ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Bliss Ventures
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-smooth hover:text-yellow-500 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <Button variant={isScrolled ? "dark" : "gold"}>
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-width flex flex-col py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Button variant="dark">Book Consultation</Button>
          </div>
        </div>
      )}
    </header>
  );
}