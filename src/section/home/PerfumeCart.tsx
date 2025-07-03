"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { sendWhatsAppMessage } from "@/utils/whatsapp";

const PerfumeCart: React.FC = () => {
  const { isCartOpen, cartItems, closeCart, updateQuantity, removeItem, clearCart } = useCart();
  const { showToast } = useToast();

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    sendWhatsAppMessage(cartItems, total);
    clearCart();
    closeCart();
    showToast("Tu pedido ha sido enviado por WhatsApp 📦", "success");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
      <div className="bg-pink-50 h-full w-full max-w-md shadow-xl flex flex-col">
        <div className="p-6 border-b border-pink-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-pink-900">Carrito de compras</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-pink-100 rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-pink-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-pink-500">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-pink-100 p-4 rounded-xl">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-pink-900">{item.name}</h3>
                    <p className="text-sm text-pink-600">{item.brand}</p>
                    <p className="text-lg font-bold text-pink-700">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          item.quantity <= 1 ? removeItem(item.id) : updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-pink-800 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-pink-200 hover:bg-pink-300 text-pink-800 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                      aria-label="Eliminar artículo"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-pink-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-pink-900">Total:</span>
              <span className="text-2xl font-bold text-pink-700">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Finalizar compra por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfumeCart;
