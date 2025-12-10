import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-lime-50 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Background Motion Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-lime-400 rounded-full mix-blend-soft-light blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-soft-light blur-3xl opacity-20"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 relative z-10">
        
        {/* Column 1: Logo & About */}
        <div>
  <h2 className="text-3xl font-bold font-bricolage text-lime-300 mb-4">
    BloomScape
  </h2>
  <p className="text-lime-100 text-sm leading-relaxed mb-6">
    Crafting sustainable and inspiring outdoor spaces that bring nature closer to home and business environments.
  </p>
  <div className="flex space-x-4">
    {/* Replace "#" with your actual social media links */}
    <motion.a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400/20 hover:bg-lime-400/40 transition-all"
    >
      <Facebook size={18} />
    </motion.a>
    <motion.a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400/20 hover:bg-lime-400/40 transition-all"
    >
      <Instagram size={18} />
    </motion.a>
    <motion.a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400/20 hover:bg-lime-400/40 transition-all"
    >
      <Twitter size={18} />
    </motion.a>
  </div>
</div>

        {/* Column 2: Quick Links */}
        <div>
  <h3 className="text-xl font-semibold text-lime-200 mb-5">Quick Links</h3>
  <ul className="space-y-3 text-sm">
    {[
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ].map((link, i) => (
      <li key={i}>
        <motion.div whileHover={{ x: 5 }}>
          <Link
            to={link.path}
            className="hover:text-lime-300 transition-all"
          >
            {link.name}
          </Link>
        </motion.div>
      </li>
    ))}
  </ul>
</div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-xl font-semibold text-lime-200 mb-5">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Garden Design",
              "Landscaping",
              "Turf Installation",
              "Tree Care",
              "Outdoor Lighting",
            ].map((service, i) => (
              <li key={i}>
                <motion.a
                  href="serviceDetail"
                  className="hover:text-lime-300 transition-all"
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-lime-200 mb-5">Get in Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-lime-300 mt-1" />
              <p>123 Green Street, EcoVille, California, USA</p>
            </li>
            <li className="flex items-start space-x-3">
  <Phone size={18} className="text-lime-300 mt-1" />
  <a href="tel:+15552346789" className="hover:text-lime-300 transition-all">
    +1 (555) 234-6789
  </a>
</li>

<li className="flex items-start space-x-3">
  <Mail size={18} className="text-lime-300 mt-1" />
  <a href="mailto:contact@bloomscape.com" className="hover:text-lime-300 transition-all">
    contact@bloomscape.com
  </a>
</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-lime-700/40 my-10 mx-6"></div>

      {/* Bottom Bar */}
      <div className="text-center text-lime-200 text-sm">
        © {new Date().getFullYear()} <span className="text-lime-400 font-semibold">BloomScape</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
