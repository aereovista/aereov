// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

// Metadatos para SEO de esta página específica
export const metadata: Metadata = {
  title: 'Blog y Recursos | AEREovista',
  description: 'Análisis, guías y tendencias en tecnología drone para la optimización de proyectos de construcción en Argentina. Mantenete actualizado con AEREovista.',
};

// --- BASE DE DATOS COMPLETA CON LOS 6 ARTÍCULOS ---
const blogPosts = [
  {
    slug: "optimizacion-obra-drones-fotogrametria-2025",
    title: "Cómo la Fotogrametría con Drones Optimiza tu Obra en 2025",
    image: "/image/fotometria2.jpg",
    excerpt: "Descubre cómo los modelos 3D y los datos topográficos exactos te permiten tomar decisiones informadas, reducir costos y cumplir plazos en Buenos Aires.",
    date: "Julio 2025",
  },
  {
    slug: "monitoreo-aereo-seguimiento-de-obra-argentina",
    title: "Monitoreo Aéreo: El Ojo Que No Descansa en Tu Construcción",
    image: "/image/drones.jpg",
    excerpt: "Entendé cómo el seguimiento regular con drones facilita la gestión de plazos, el control de recursos y la comunicación con inversores y equipos en sitio.",
    date: "Junio 2025",
  },
  {
    slug: "drones-seguridad-prevencion-riesgos-obra",
    title: "Drones: Mejorando la Seguridad y Reduciendo Riesgos en Obra",
    image: "/image/djimini4pro.jpg",
    excerpt: "Conoce el impacto de las inspecciones aéreas en la prevención de accidentes, la detección de anomalías y el cumplimiento de normativas ANAC en tu obra.",
    date: "Mayo 2025",
  },
  {
    slug: "roi-drones-construccion-argentina",
    title: "El ROI de un Drone en tu Obra: Más Allá del Video Bonito",
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Analizamos el Retorno de la Inversión al contratar servicios de drones. Cómo se traduce la data aérea en ahorro tangible y mayor rentabilidad para tu proyecto.",
    date: "28 de Julio, 2025",
  },
  {
    slug: "topografia-drones-vs-tradicional",
    title: "Topografía Tradicional vs. Fotogrametría con Drones",
    image: "https://images.pexels.com/photos/2249962/pexels-photo-2249962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Una comparativa directa de costos, tiempos y precisión entre los métodos topográficos convencionales y los relevamientos aéreos con tecnología drone.",
    date: "05 de Agosto, 2025",
  },
  {
    slug: "5-claves-contratar-servicio-drones-profesional",
    title: "5 Claves para Contratar un Servicio de Drones Profesional",
    image: "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "No todos los operadores de drones son iguales. Te damos una guía para elegir un socio tecnológico confiable que entienda las exigencias de la construcción.",
    date: "12 de Agosto, 2025",
  },
];


export default function BlogIndexPage() {
  return (
    <main>
      <section className="py-24 pt-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Blog y <span className="text-blue-600">Recursos</span>
            </h1>
            <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
              Análisis, guías y tendencias en tecnología drone para la optimización de proyectos de construcción en Argentina.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group border border-gray-200"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">{post.date}</p>
                    <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center text-blue-600 font-semibold">
                    Leer artículo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors text-lg">
              &larr; Volver a la página principal
            </Link>
          </div>
          
        </div>
      </section>
    </main>
  );
}
