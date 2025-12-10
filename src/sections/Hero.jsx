import React from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/images/hero-img.webp";
import heroIcons from "/assets/images/hero-icons.png";
import { Link } from "react-router-dom";



export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Constrain Hero width to match Header */}
      <div className="mx-auto px-2">
        {/* Hero Image Section */}
        <div
          className="relative bg-cover bg-center min-h-[85vh] flex items-center justify-center rounded-3xl"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We Bring Your <br /> Garden{" "}
              <span className="text-lime-300 relative">
                to Life
                <motion.span
                  className="absolute left-0 bottom-1 h-[6px] bg-lime-400 w-full rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </motion.h1>

            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
             <Link to="/projects">
              <button
  className="bg-[#8bc34a] text-white px-6 py-3 rounded-full font-semibold 
             hover:bg-[#66a43a] transition-all shadow-md hover:shadow-lg"
>
  Explore Projects
</button></Link>
<Link to='/contact'>
              <button className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition-all shadow-md hover:shadow-lg">
                Request a Quote
              </button></Link>
            </motion.div>
          </div>

          {/* Rating Badge */}
          <motion.div
            className="absolute bottom-8 right-8 bg-lime-300 text-gray-800 px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            ⭐ 4.8 <span className="text-sm font-normal">Customer Rating</span>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          className="w-full my-10 flex flex-wrap items-center justify-center gap-10 bg-white/10 backdrop-blur-xl px-12 py-6 rounded-2xl text-gray-900 shadow-2xl border border-gray-200 font-bricolage"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          {[
            {
              text: (
                <>
                  Trusted by{" "}
                  <span className="text-green-700 font-semibold">1000+</span>{" "}
                  Clients
                </>
              ),
            },
            {
              text: (
                <>
                  Commitment to{" "}
                  <span className="text-green-700 font-semibold">
                    High Standards
                  </span>
                </>
              ),
            },
            {
              text: (
                <>
                  <span className="text-green-700 font-semibold">
                    Award Winning
                  </span>{" "}
                  Landscape Company
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <img
                src={heroIcons}
                alt=""
                className="w-7 h-7 drop-shadow-lg"
              />
              <p className="font-medium tracking-wide">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
