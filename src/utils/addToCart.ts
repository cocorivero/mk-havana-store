"use client";

import { Perfume } from "@/types/perfume";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export const useAddToCartHandler = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (perfume: Perfume, quantity = 1) => {
    if (!perfume?.id) {
      showToast("No se pudo agregar el producto", "error");
      return;
    }

    addToCart({
      id: String(perfume.id),
      name: perfume.name,
      brand: perfume.brand,
      price: perfume.price,
      image: perfume.image,
      quantity,
    });

    showToast("Producto agregado al carrito 🛒", "success");
  };
};
