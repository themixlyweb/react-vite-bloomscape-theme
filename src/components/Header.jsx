import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center py-6 px-2 max-w-[1450px]">

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-700 text-3xl font-bold tracking-tight">
            🌿 BloomScape
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden xl:flex gap-10 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navItems.map((link, index) => (
            <motion.div key={index} whileHover={{ y: -2 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `cursor-pointer transition ${
                    isActive ? "text-green-600 font-semibold" : "text-gray-800"
                  } hover:text-green-600`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop Buttons */}
        <motion.div
          className="hidden xl:flex items-center gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="tel:+322820820">
  <button className="flex items-center gap-2 bg-lime-200 text-green-900 px-5 py-3 rounded-full font-semibold hover:bg-lime-300 transition w-full">
    <Phone size={18} /> (322) 820 820
  </button>
</a>
          <Link to='/contact'>
          <button className="bg-green-700 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-800 transition">
            Get a Quote
          </button></Link>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="text-green-800 focus:outline-none"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </div>

      {/* Sidebar Mobile Menu */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-screen w-[80%] sm:w-[350px] bg-white shadow-xl z-[999] p-6 flex flex-col justify-between"
    >
      {/* Top Section - Logo + Close Button */}
      <div className="flex justify-between items-center mb-16"> 
        <span className="text-green-700 text-3xl font-bold">🌿 BloomScape</span>
        <button onClick={() => setIsMenuOpen(false)}>
          <X size={28} className="text-green-800" />
        </button>
      </div>

      {/* Middle - Nav Links (moved up) */}
      <div className="flex-1 flex flex-col gap-6 text-lg font-medium mt-0 overflow-auto">
        {navItems.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-green-600 font-semibold" : "text-gray-700"
              } hover:text-green-600`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col gap-3 mt-6">
         <a href="tel:+322820820">
        <button className="flex items-center justify-center gap-2 bg-lime-200 text-green-900 px-4 py-3 rounded-full font-semibold hover:bg-lime-300 transition w-full">
          <Phone size={18} /> (322) 820 820
        </button></a>

        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          <button className="bg-green-700 text-white px-4 py-3 rounded-full font-semibold hover:bg-green-800 transition w-full">
            Get a Quote
          </button>
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};

export default Header;
