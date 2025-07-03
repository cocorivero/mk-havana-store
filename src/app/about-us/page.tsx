import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import PageTransition from '@/components/PageTransition';

const AboutUsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-pink-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16">
            <h1 className="text-4xl font-bold text-pink-900 mb-8 text-center">Sobre Nosotros</h1>

            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              En PerfumeShop, creemos que cada fragancia cuenta una historia. Más que una tienda, somos curadores de
              experiencias olfativas que conectan con tu esencia y estilo de vida.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-pink-800 mb-4">Nuestra Misión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Democratizar el acceso a perfumes de alta calidad, brindando una experiencia de compra excepcional y
                  personalizada, con una amplia gama que va desde clásicos atemporales hasta las últimas tendencias.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-pink-800 mb-4">Nuestra Visión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Visualizamos un mundo donde el perfume es una forma de expresión artística y personal. Queremos
                  liderar una comunidad global de amantes de las fragancias, comprometidos con la calidad y
                  autenticidad.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">¿Por Qué Elegirnos?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Calidad Garantizada",
                    desc: "Solo ofrecemos productos 100% originales y de las mejores marcas.",
                    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  },
                  {
                    title: "Atención Personalizada",
                    desc: "Nuestro equipo está listo para ayudarte a encontrar tu fragancia ideal.",
                    icon: (
                      <>
                        <path d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </>
                    ),
                  },
                  {
                    title: "Precios Competitivos",
                    desc: "Ofrecemos los mejores precios sin comprometer la calidad.",
                    icon: (
                      <path d="M3 10h18M7 15h10m-9 4h8m-10 0h2m-2-4h2m-2-4h2M3 6h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                    ),
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-pink-100 p-6 rounded-xl shadow-md text-center">
                    <svg
                      className="w-12 h-12 text-pink-600 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {card.icon}
                    </svg>
                    <h3 className="text-xl font-semibold text-pink-900 mb-2">{card.title}</h3>
                    <p className="text-gray-700">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold text-pink-800 mb-4">Nuestro Equipo</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Detrás de PerfumeShop hay un equipo apasionado por las fragancias, desde expertos en aromas hasta
                atención al cliente, comprometidos en brindarte lo mejor.
              </p>
            </section>

            <section className="bg-pink-100 rounded-2xl p-8 shadow-md text-center mb-16">
              <h2 className="text-3xl font-bold text-pink-800 mb-4">Contáctanos</h2>
              <p className="text-gray-700 mb-4">
                ¿Tienes alguna pregunta, sugerencia o simplemente quieres charlar sobre perfumes? ¡Estamos aquí para
                escucharte!
              </p>
              <div className="text-gray-700 space-y-2 mb-6">
                <p>
                  <span className="font-semibold">Email:</span> mkhavanastore@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Teléfono:</span> +53 50524333
                </p>
              </div>
              <a
                href="https://wa.me/5350524333?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20PerfumeShop."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
                Envíanos un WhatsApp
              </a>
            </section>

            <div className="text-center">
              <Link
                href="/"
                className="inline-block bg-pink-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors"
              >
                Volver a la Tienda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutUsPage;
