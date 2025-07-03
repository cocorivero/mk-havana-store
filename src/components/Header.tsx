"use client";

import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useSearch } from "@/context/SearchContext";
import { useCart } from "@/context/CartContext";

const PerfumeHeader = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const { cartItems, openCart } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-pink-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-pink-900 flex items-center">
              M<FaHeart className="mx-2 text-pink-600 w-7 h-7 mt-1" />K
              <span className="ml-1 hidden sm:inline">Havana</span>
            </h1>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar perfumes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-pink-700 bg-pink-50 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <button onClick={openCart} className="relative pr-3 text-pink-600 hover:text-pink-800 transition-colors">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 right-0 translate-x-1/2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default PerfumeHeader;
