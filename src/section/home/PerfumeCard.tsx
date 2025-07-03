import React from "react";
import Image from "next/image";
import { Perfume } from "@/types/perfume";

type PerfumeCardProps = {
  perfume: Perfume;
  onAddToCart?: (perfume: Perfume) => void;
  onViewDetails?: (perfume: Perfume) => void;
};

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume, onAddToCart, onViewDetails }) => {
  const discount = Math.round(((perfume.originalPrice - perfume.price) / perfume.originalPrice) * 100);

  return (
    <div className="bg-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          style={{ objectFit: "cover" }}
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow">
            -{discount}%
          </div>
        )}
        {!perfume.inStock && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">Agotado</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-pink-600 font-medium">{perfume.brand}</span>
          <span className="text-xs text-gray-500">{perfume.category}</span>
        </div>

        <h3 className="text-lg font-bold text-pink-900 mb-1">{perfume.name}</h3>

        <p className="text-gray-600 text-xs mb-2 line-clamp-2">{perfume.description}</p>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(perfume.rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-600">({perfume.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-pink-900">${perfume.price}</span>
            {discount > 0 && <span className="text-sm text-gray-500 line-through">${perfume.originalPrice}</span>}
          </div>
          <span className="text-xs text-gray-500">{perfume.size}</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails?.(perfume)}
            className="flex-1 bg-pink-100 text-pink-700 py-1 px-2 rounded-md text-sm hover:bg-pink-200 transition-colors"
          >
            Detalles
          </button>
          <button
            onClick={() => onAddToCart?.(perfume)}
            disabled={!perfume.inStock}
            className={`flex-1 py-1 px-2 rounded-md text-sm font-medium transition-colors ${
              perfume.inStock
                ? "bg-pink-600 text-white hover:bg-pink-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {perfume.inStock ? "Agregar" : "Agotado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;
