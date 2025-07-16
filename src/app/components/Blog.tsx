// app/components/Blog.tsx
import Link from "next/link";
import Image from "next/image";

// La data de los posts actualizada con tus imágenes locales.
const blogPosts = [
  {
    slug: "optimizacion-obra-drones-fotogrametria-2025",
    title: "Cómo la Fotogrametría con Drones Optimiza tu Obra en 2025",
    image: "/image/djimini4pro.jpg", // Imagen actualizada
    excerpt: "Descubre cómo los modelos 3D y los datos topográficos exactos te permiten tomar decisiones informadas, reducir costos y cumplir plazos en Buenos Aires.",
    date: "Julio 2025",
  },
  {
    slug: "monitoreo-aereo-seguimiento-de-obra-argentina",
    title: "Monitoreo Aéreo: El Ojo Que No Descansa en Tu Construcción",
    image: "/image/fotometria2.jpg", // Imagen actualizada
    excerpt: "Entendé cómo el seguimiento regular con drones facilita la gestión de plazos, el control de recursos y la comunicación con inversores y equipos en sitio.",
    date: "Junio 2025",
  },
  {
    slug: "drones-seguridad-prevencion-riesgos-obra",
    title: "Drones: Mejorando la Seguridad y Reduciendo Riesgos en Obra",
    image: "/image/drones.jpg", // Imagen actualizada
    excerpt: "Conoce el impacto de las inspecciones aéreas en la prevención de accidentes, la detección de anomalías y el cumplimiento de normativas ANAC en tu obra.",
    date: "Mayo 2025",
  },
];

const Blog = () => (
  <section id="blog" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Últimas Noticias y <span className="text-blue-600">Recursos</span>
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Explora nuestro contenido especializado: análisis, guías y las últimas tendencias en tecnología drone para optimizar tu proyecto de construcción.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-200 group"
          >
            <div className="mb-4 rounded-lg overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                priority={i < 2}
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-500 text-sm font-medium mb-1">{post.date}</p>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{post.excerpt}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
              Leer artículo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform text-lg">
          Explorar todos los artículos
        </Link>
      </div>
    </div>
  </section>
);

export default Blog;
