"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-pink-200 mb-2">MK Havana</h3>
          <p className="text-pink-100">Tu destino para fragancias exclusivas.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 text-pink-100">
          <Link href="/about-us">
            <span className="hover:text-pink-300 transition-colors cursor-pointer">Sobre Nosotros</span>
          </Link>
          <Link href="/">
            <span className="hover:text-pink-300 transition-colors cursor-pointer">Política de Privacidad</span>
          </Link>
          <Link href="/">
            <span className="hover:text-pink-300 transition-colors cursor-pointer">Términos y Condiciones</span>
          </Link>
          <Link href="/faq">
            <span className="hover:text-pink-300 transition-colors cursor-pointer">Preguntas Frecuentes</span>
          </Link>
        </div>
        <div className="mb-4 text-pink-100">
          <p>Teléfono: +52 50524333</p>
          <p>Email: mkhavanastore@gmail.com</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://wa.me/50524333" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="w-6 h-6 text-green-500" />
            </a>
            <a
              href="https://www.instagram.com/mk_havana?igsh=Z3c4MmwwdmNremcx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-pink-500" />
            </a>
            <a
              href="https://www.facebook.com/tu_cuenta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </a>
          </div>
        </div>
        <p className="text-pink-300 text-sm">
          &copy; {new Date().getFullYear()} MK Havana. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
