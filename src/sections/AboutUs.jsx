import React from "react";
import { motion } from "framer-motion";
import heroImage from "/assets/images/about-us.webp";
import { Link } from "react-router-dom";


const AboutHero = () => {
  return (
    <section className="relative bg-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 overflow-hidden font-inter">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-50 via-white to-lime-100 opacity-70 -z-10"></div>

      {/* Left Content */}
      <motion.div
        className="flex-1 z-20 text-gray-800 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase text-sm tracking-widest text-green-800 font-medium">
          Who We Are
        </p>

        <h2 className="text-5xl md:text-6xl font-bricolage font-semibold leading-tight text-green-950">
          Boutique <br />
          Landscape Design & Garden
        </h2>

        <div className="flex items-center gap-3 mt-10">
          <motion.img
            src="/assets/images/badge.png"
            alt="Award Badge"
            className="w-14 h-14"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="text-sm text-gray-600 uppercase tracking-wide">
            Best Rated Landscaping Company 2025
          </p>
        </div>
      </motion.div>

      {/* Center Image with Animated Leaf Ring */}
      <motion.div
        className="relative flex-1 flex justify-center mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Glowing aura behind image */}
        <motion.div
          className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-lime-300/40 to-green-400/20 blur-3xl -z-10"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🌿 Rotating Leaf Ring */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="absolute w-[460px] h-[460px] z-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        >
          <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#74c365" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
          </defs>

          {/* 12 organic leaf shapes evenly spaced */}
          <g fill="url(#leafGradient)" opacity="0.8">
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d="M300,120 C310,100 340,100 350,120 C340,150 310,150 300,120Z"
                transform={`rotate(${i * 30} 300 300)`}
              />
            ))}
          </g>
        </motion.svg>

        {/* Image Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
          <img
            src={heroImage}
            alt="Boutique Landscape Design & Garden"
            className="w-[400px] h-[500px] object-cover"
          />
          <Link to='/about'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 left-0 w-full bg-[#558b2f] text-white font-semibold py-4 text-lg"
          >
            More About Us
          </motion.button></Link>
        </div>
      </motion.div>

      {/* Right Text Block */}
      <motion.div
        className="flex-1 mt-12 md:mt-0 md:ml-12 text-gray-700 space-y-5 z-20"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="leading-relaxed text-gray-600">
          Locally owned landscape design company since 2012. Licensed and based
          in New York, with 12+ years of experience creating natural, timeless
          outdoor spaces. Personal approach, honest work, and a passion for
          greenery at the heart of every project.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Family-Owned & Operated",
            "Licensed & Insured",
            "Custom, Nature-Inspired Designs",
            "Trusted Local Business with Personal Service",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-lime-50 border border-lime-200 hover:bg-lime-100 transition"
              whileHover={{ x: 6 }}
            >
              <div className="w-6 h-6 bg-[#558b2f] rounded-full flex items-center justify-center text-white font-bold">
                ✿
              </div>
              <p className="text-gray-800 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
