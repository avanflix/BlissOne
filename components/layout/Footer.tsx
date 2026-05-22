import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white section-padding">
      <div className="container-width grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold mb-5">Bliss Ventures</h3>

          <p className="text-gray-400 leading-relaxed">
            Crafting premium living spaces that combine elegance, innovation,
            and long-term investment value.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-5">Quick Links</h4>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition-smooth">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-smooth">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-smooth">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-smooth">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-5">Contact</h4>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>blissventures.co@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-xl font-semibold mb-5">Follow Us</h4>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Blissventurespvtltd"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-smooth"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com/blissventures_pvt.ltd/"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-smooth"
            >
              <FaInstagram size={20} />
            </a>

            {/* <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-smooth"
            >
              <FaLinkedinIn size={20} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-width border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
        © 2026 Bliss Ventures. All rights reserved.
      </div>
    </footer>
  );
}