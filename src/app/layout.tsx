import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import PerfumeHeader from "@/components/Header";
import { SearchProvider } from '@/context/SearchContext';

export const metadata: Metadata = {
  title: "MK Havana",
  description: "Perfume store built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <PerfumeHeader />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
