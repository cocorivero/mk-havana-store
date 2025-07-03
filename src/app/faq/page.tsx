import React from "react";
import FAQList from "@/section/faq/FAQList";
import Link from "next/link";
import PageTransition from '@/components/PageTransition';

const FAQPage = () => {
  const faqs = [
    {
      question: "¿Son los perfumes originales?",
      answer:
        "Sí, en PerfumeShop garantizamos que todos nuestros perfumes son 100% originales y provienen directamente de los fabricantes o distribuidores autorizados. No vendemos imitaciones ni productos de baja calidad.",
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer:
        "El tiempo de entrega estándar es de 3 a 5 días hábiles para envíos nacionales. Para envíos internacionales, el tiempo puede variar entre 7 y 15 días hábiles, dependiendo del destino. Recibirás un número de seguimiento una vez que tu pedido sea enviado.",
    },
    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer:
        "Actualmente, aceptamos pagos a través de transferencia bancaria y depósito en efectivo. Una vez que finalices tu compra, te proporcionaremos los detalles necesarios para completar el pago. Estamos trabajando para integrar más opciones de pago en el futuro.",
    },
    {
      question: "¿Puedo devolver un perfume si no me gusta?",
      answer:
        "Sí, aceptamos devoluciones dentro de los 15 días posteriores a la recepción del producto, siempre y cuando el perfume no haya sido usado y se encuentre en su empaque original, sellado y en perfectas condiciones. Consulta nuestra política de devoluciones completa para más detalles.",
    },
    {
      question: "¿Cómo puedo saber qué perfume es el adecuado para mí?",
      answer:
        "Entendemos que elegir un perfume puede ser un desafío. Te recomendamos leer las descripciones detalladas de cada fragancia, incluyendo sus notas olfativas y categorías. Si necesitas ayuda personalizada, no dudes en contactar a nuestro equipo de expertos a través de WhatsApp o correo electrónico.",
    },
    {
      question: "¿Ofrecen muestras de perfumes?",
      answer:
        "Por el momento, no ofrecemos muestras gratuitas de perfumes. Sin embargo, estamos explorando opciones para incluir muestras en futuras promociones o kits especiales. Mantente atento a nuestras redes sociales y boletines para novedades.",
    },
    {
      question: "¿Cómo puedo contactar al servicio al cliente?",
      answer:
        "Puedes contactarnos a través de nuestro número de WhatsApp: +52 55 1234 5678, enviándonos un correo electrónico a info@perfumeshop.com, o utilizando el formulario de contacto en nuestra página 'Sobre Nosotros'. Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 (hora de la Ciudad de México).",
    },
    {
      question: "¿Tienen tienda física?",
      answer:
        "Actualmente, PerfumeShop opera exclusivamente como una tienda en línea. Esto nos permite ofrecer una mayor variedad de productos y precios más competitivos. Sin embargo, estamos evaluando la posibilidad de abrir puntos de venta físicos en el futuro.",
    },
  ];

  return (
    <PageTransition>
      {" "}
      <div className="min-h-screen bg-pink-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-pink-900 mb-8 text-center">Preguntas Frecuentes</h1>

            <FAQList faqs={faqs} />

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">¿No encontraste lo que buscabas? ¡Contáctanos directamente!</p>
              <Link
                href="/about-us"
                className="bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors inline-block"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQPage;
