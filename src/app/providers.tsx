"use client";

import { CartProvider } from "@/context/CartContext";
import { ModalProvider } from "@/context/ModalContext";
import { SearchProvider } from "@/context/SearchContext";
import { ToastProvider } from "@/context/ToastContext";
import { SessionProvider } from "next-auth/react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ModalProvider>
        <CartProvider>
          <SearchProvider>
            <ToastProvider>{children}</ToastProvider>
          </SearchProvider>
        </CartProvider>
      </ModalProvider>
    </SessionProvider>
  );
}

