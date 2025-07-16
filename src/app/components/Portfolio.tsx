"use client";

import { useState } from "react";
import Image from "next/image";

type PortfolioImage = {
  type: "image";
  src: string;
  alt: string;
  title: string;
  description?: string; // Opcional: para dar más contexto en el modal
};

type PortfolioVideo = {
  type: "video";
  youtubeId: string;
  title: string;
  thumbnail: string; // Esta URL ahora será la real de YouTube
  description?: string; // Opcional: para dar más contexto en el modal
};

type PortfolioItem = PortfolioImage | PortfolioVideo;

const portfolioItems: PortfolioItem[] = [
  // Imágenes de Proyectos de Construcción (TODAS LAS ORIGINALES)
  {
    type: "image",
    src: "https://images.pexels.com/photos/1036329/pexels-photo-1036329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Vista aérea de obra en construcción",
    title: "Monitoreo de Avance de Obra",
    description: "Seguimiento periódico de una construcción residencial para control de hitos y progreso.",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1581414/pexels-photo-1581414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modelo 3D de terreno para topografía",
    title: "Modelado 3D y Topografía de Terrenos",
    description: "Generación de modelos digitales de elevación y superficie para planificación de proyectos y cubicaciones.",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Inspección de infraestructura vial",
    title: "Inspección de Infraestructura Vial",
    description: "Análisis detallado de rutas y puentes para detección de patologías y mantenimiento predictivo.",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/997230/pexels-photo-997230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Cálculo de volumen de acopio de materiales",
    title: "Cálculo de Volúmenes y Acopios",
    description: "Medición precisa de existencias de materiales y movimientos de tierra para control de inventario y costos.",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1310747/pexels-photo-1310747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Vista aérea de un parque industrial en desarrollo",
    title: "Desarrollo de Parques Industriales",
    description: "Seguimiento de grandes proyectos de urbanización y construcción industrial desde una perspectiva aérea.",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Inspección de cubiertas y fachadas de edificios",
    title: "Inspección de Estructuras y Cubiertas",
    description: "Evaluación visual de difícil acceso para identificar daños, filtraciones o necesidades de mantenimiento.",
  },

  // Videos de Proyectos de Construcción (TODOS LOS ORIGINALES)
  {
    type: "video",
    youtubeId: "izQ6H3SdeyE", // Reemplaza con un ID de video de construcción real
    title: "Video de Avance de Obra - Edificio Corporativo",
    thumbnail: "https://img.youtube.com/vi/izQ6H3SdeyE/hqdefault.jpg", // Miniatura de YouTube
    description: "Un recorrido aéreo que muestra el progreso semanal de un edificio corporativo, ideal para reportes a inversores.",
  },
  {
    type: "video",
    youtubeId: "w1U37o5QqQU", // Reemplaza con un ID de video de construcción real
    title: "Inspección Aérea de Puente",
    thumbnail: "https://img.youtube.com/vi/w1U37o5QqQU/hqdefault.jpg", // Miniatura de YouTube
    description: "Inspección visual detallada de la estructura de un puente para identificar posibles fallas o desgastes.",
  },
  {
    type: "video",
    youtubeId: "hRStQK7-gE0", // Reemplaza con un ID de video de construcción real
    title: "Timelapse de Construcción - Centro Logístico",
    thumbnail: "https://img.youtube.com/vi/hRStQK7-gE0/hqdefault.jpg", // Miniatura de YouTube
    description: "Un timelapse que condensa meses de trabajo en la construcción de un centro logístico, ideal para marketing y archivo.",
  },
];

const Portfolio = () => {
  const [openIdx, setOpenIdx] = useState<null | number>(null);

  return (
    <section id="portafolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* Título MEJORADO con el estilo consistente */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Proyectos para la <span className="text-blue-600">Construcción</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Casos de éxito y la aplicación de nuestra tecnología en obras reales.
          </p>
        </div>
        {/* Las clases de la cuadrícula se mantienen para mostrar múltiples elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] flex items-center justify-center bg-black cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setOpenIdx(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Ver ${item.title} ampliado`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                  priority={idx < 3} // Prioriza las primeras 3 imágenes
                />
              ) : (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                  priority={false} // No priorizar miniaturas de video a menos que sea necesario
                />
              )}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-bold">{item.title}</p>
              </div>
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-16 h-16 text-white opacity-90 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="black" opacity="0.6" />
                    <polygon points="10,8 16,12 10,16" fill="white" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Modal/Lightbox */}
        {openIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-all duration-300"
            onClick={() => setOpenIdx(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] mx-4 flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-4xl z-10 hover:text-red-500 transition-colors"
                onClick={() => setOpenIdx(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
              {portfolioItems[openIdx].type === "image" ? (
                <Image
                  src={(portfolioItems[openIdx] as PortfolioImage).src}
                  alt={(portfolioItems[openIdx] as PortfolioImage).alt}
                  width={1600}
                  height={900}
                  className="rounded-xl max-h-[80vh] w-auto mx-auto object-contain bg-black"
                  priority
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center">
                  <iframe
                    src={`https://www.youtube.com/embed/${(portfolioItems[openIdx] as PortfolioVideo).youtubeId}?autoplay=1&rel=0`}
                    title={(portfolioItems[openIdx] as PortfolioVideo).title}
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                  />
                </div>
              )}
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold mb-1">{portfolioItems[openIdx].title}</h3>
                {portfolioItems[openIdx].description && (
                  <p className="text-gray-300 text-sm">{portfolioItems[openIdx].description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;