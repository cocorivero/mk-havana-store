"use client";

import { Perfume } from "@/types/perfume";
import Image from "next/image";
import React from "react";
import { useAddToCartHandler } from "@/utils/addToCart";

interface Props {
  perfume: Perfume;
  onClose?: () => void;
}

const PerfumeDetail = ({ perfume, onClose }: Props) => {
  const addToCart = useAddToCartHandler();

  if (!perfume) return null;

  const discount = Math.round(((perfume.originalPrice - perfume.price) / perfume.originalPrice) * 100);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-pink-50 rounded-2xl w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden">
        <div className="relative flex-1 overflow-y-auto">
          <button
            onClick={() => onClose?.()}
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 z-10 rounded-full p-2 hover:bg-pink-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
              <div className="relative w-full h-64 sm:h-96">
                <Image src={perfume.image} alt={perfume.name} fill className="rounded-2xl object-cover" />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{discount}%
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-pink-600 font-medium">{perfume.brand}</span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-pink-900 mb-2">{perfume.name}</h1>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">{perfume.category}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(perfume.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {perfume.rating} ({perfume.reviews} reseñas)
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{perfume.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-pink-900 mb-3">Notas olfativas</h3>
                    <div className="flex flex-wrap gap-2">
                      {perfume.notes.map((note, index) => (
                        <span key={index} className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-pink-900">${perfume.price}</span>
                      {discount > 0 && (
                        <span className="text-xl text-gray-500 line-through">${perfume.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-lg text-gray-600">{perfume.size}</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(perfume)}
                  disabled={!perfume.inStock}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors ${
                    perfume.inStock
                      ? "bg-pink-600 text-white hover:bg-pink-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {perfume.inStock ? "Agregar al carrito" : "Producto agotado"}
                </button>

                {perfume.inStock && (
                  <div className="text-center mt-4">
                    <span className="text-green-600 font-medium">✓ Disponible en stock</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetail;
