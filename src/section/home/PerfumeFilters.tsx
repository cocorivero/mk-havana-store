"use client";

import React from "react";

interface PerfumeFiltersProps {
  categories: string[];
  brands: string[];
  priceBounds: {
    min: number;
    max: number;
  };
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  priceRange: number;
  onPriceChange: (price: number) => void;
}

const PerfumeFilters: React.FC<PerfumeFiltersProps> = ({
  categories,
  brands,
  priceBounds,
  selectedCategory,
  onCategoryChange,
  selectedBrand,
  onBrandChange,
  priceRange,
  onPriceChange,
}) => {
  return (
    <div className="bg-pink-50 rounded-2xl shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-pink-900 mb-4">Filtros</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Categoría */}
        <div>
          <label className="block text-sm font-medium text-pink-700 mb-2">Categoría</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 bg-white text-pink-700"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Marca */}
        <div>
          <label className="block text-sm font-medium text-pink-700 mb-2">Marca</label>
          <select
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 bg-white text-pink-700"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-pink-700 mb-2">
            Precio máximo: ${priceRange}
          </label>
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            step={50}
            value={priceRange}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-pink-500 mt-1">
            <span>${priceBounds.min}</span>
            <span>${priceBounds.max}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeFilters;
