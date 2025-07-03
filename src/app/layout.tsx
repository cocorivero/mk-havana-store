import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import PerfumeHeader from "@/components/Header";
import CartWrapper from "@/components/CartWrapper";
import { AppProviders } from "./providers";
import ModalManager from "@/components/ModalManager";

export const metadata: Metadata = {
  title: "MK Havana",
  description: "Perfume store built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <PerfumeHeader />
          <CartWrapper />
          <ModalManager />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
