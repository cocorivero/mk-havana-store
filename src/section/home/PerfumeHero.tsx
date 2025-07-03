'use client';
import React from "react";

const PerfumeHero = () => {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url("/images/portada.png")` }} // usa /public/img/portada.png
        role="img"
        aria-label="Perfume de fondo"
      />

      {/* Filtro opcional */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-600/40 to-rose-400/30 z-10" /> */}

      {/* Contenido */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-left text-balance mb-6">
          Descubre tu
          <span className="block text-pink-200">Fragancia Perfecta</span>
        </h1>

        <p className="text-xl md:text-2xl text-left text-balance text-white/90 max-w-2xl mb-10">
          Explora nuestra exclusiva colección de perfumes de las mejores marcas del mundo. Encuentra la fragancia que define tu personalidad.
        </p>

        {/* Beneficios */}
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-start">
          {[
            {
              icon: (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              ),
              text: "Calidad Premium",
            },
            {
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8 4m0 0L4 7m8 4v10" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10l8 4 8-4V7" />
                </>
              ),
              text: "Envío a Domicilio",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
              text: "Garantía 100%",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-lg px-5 py-4 flex items-center gap-3 shadow-lg"
            >
              <svg
                className="w-8 h-8 text-pink-200 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfumeHero;
