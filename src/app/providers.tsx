"use client";

import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import { ToastProvider } from '@/context/ToastContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SearchProvider>
        <ToastProvider>{children}</ToastProvider>
      </SearchProvider>
    </CartProvider>
  );
}
