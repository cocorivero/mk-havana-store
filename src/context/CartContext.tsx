"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextProps {
  isCartOpen: boolean;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Recuperar carrito al cargar
  useEffect(() => {
    const saved = localStorage.getItem("mk-cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  // ✅ Guardar carrito en cada cambio
  useEffect(() => {
    localStorage.setItem("mk-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const toggleCart = () => setCartOpen((prev) => !prev);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartItems,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
