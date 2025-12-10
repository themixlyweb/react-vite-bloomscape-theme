import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Gardering",
    description:
      "Crafting stunning garden spaces that bring your outdoor vision to life with beauty and precision.",
    img: "/assets/images/gardening.webp",
  },
  {
    title: "Landscaping",
    description:
      "Transformative landscape design and construction that elevate outdoor living.",
    img: "/assets/images/landscaping.webp",
  },
  {
    title: "Turfing",
    description:
      "Premium turf installation and expert maintenance for lush, healthy lawns year-round.",
    img: "/assets/images/turfing.webp",
  },
  {
    title: "Tree Care",
    description:
      "Designing stunning garden spaces that elegantly bring your outdoor vision to life.",
    img: "/assets/images/treeCare.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.7, type: "spring" },
  }),
};

const Services = () => {
  return (
    <section className="py-20 bg-[#f7fbea] relative" id="services">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-green-700 font-semibold tracking-wide uppercase">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-green-950 mt-3 leading-tight font-bricolage">
          Landscaping Solutions for Homes <br /> and Businesses
        </h2>
      </motion.div>

     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
  {services.map((service, index) => {
    // Apply same gradient colors as the feature cards
    const cardColors = [
      "from-green-100 to-lime-50",
      "from-lime-100 to-green-50",
      "from-green-50 to-lime-100",
      "from-lime-50 to-green-100",
    ];
    const gradient = cardColors[index % cardColors.length];

    return (
      <motion.div
        key={index}
        className={`group relative text-center p-10 pt-16 rounded-t-[80px] shadow-lg hover:shadow-2xl transition-all overflow-hidden bg-gradient-to-br ${gradient} border border-lime-200`}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          scale: 1.05,
          rotate: 0.5,
          transition: { type: 'spring', stiffness: 200 },
        }}
      >
        <Link to='/serviceDetail' className="absolute inset-0 z-20"></Link>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-center items-center mb-4">
            <motion.span
              className="text-green-800 text-3xl font-bold group-hover:text-white transition-colors duration-500"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              ✿
            </motion.span>
          </div>

          <h3 className="text-2xl font-bold text-green-900 mt-4 mb-3 group-hover:text-white transition-colors duration-500">
            {service.title}
          </h3>

          <p className="text-green-900 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
            {service.description}
          </p>

          <motion.div
            className="mt-8 relative z-10 rounded-b-[100px] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover rounded-b-[100px] transition-all duration-500 group-hover:brightness-125"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  })}
</div>


{/* Centered Button */}
<div className="flex justify-center mt-12">
  <Link to="/services">
    <motion.button
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 20px rgba(73,132,40,0.4)", // subtle glow
      }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 rounded-full font-semibold text-lg tracking-wide
                 bg-[#498428] hover:bg-[#3f7020]
                 transition-all duration-300 shadow-md text-white"
    >
      View All Services
    </motion.button>
  </Link>
  {/* Floating Leaves */}
            <motion.div
              className="hidden md:block absolute top-12 left-20 text-green-400 text-6xl"
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              🍃
            </motion.div>
            <motion.div
                        className="hidden md:block absolute bottom-12 right-20 text-green-500 text-5xl"
                        animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                      >
                        🌿
                      </motion.div>
</div>
    </section>
  );
};

export default Services;
