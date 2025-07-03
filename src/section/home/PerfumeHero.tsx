"use client";

import React from "react";
import { LuStar } from "react-icons/lu";
import { FaMotorcycle } from "react-icons/fa";
import { LucideCheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PerfumeHero = ({ searchTerm }: { searchTerm: string }) => {
  const features = [
    {
      icon: <LuStar className="w-8 h-8 text-pink-200" />,
      text: "Calidad Premium",
    },
    {
      icon: <FaMotorcycle className="w-8 h-8 text-pink-200" />,
      text: "Servicio de mensajería",
    },
    {
      icon: <LucideCheckCircle className="w-8 h-8 text-pink-200" />,
      text: "Garantía 100%",
    },
  ];

  return (
    <AnimatePresence>
      {!searchTerm.trim() && (
        // <motion.div
        //   exit={{ opacity: 0, y: -100 }}
        //   transition={{ duration: 0.6, ease: "easeInOut" }}
        //   className="-mt-16 z-0 relative"
        // >
        <motion.div
          key="perfume-hero"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="-mt-16 z-0 relative"
        >
          <section className="relative text-white py-24 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url("/images/portada.png")` }}
              role="img"
              aria-label="Perfume de fondo"
            />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-left text-balance mb-6">
                Descubre tu
                <span className="block text-pink-200">Fragancia Perfecta</span>
              </h1>

              <p className="text-xl md:text-2xl text-left text-balance text-white/90 max-w-2xl mb-10">
                Explora nuestra exclusiva colección de perfumes de las mejores marcas del mundo. Encuentra la fragancia
                que define tu personalidad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:justify-start">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-md rounded-lg px-5 py-4 flex items-center gap-3 shadow-lg"
                  >
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerfumeHero;
