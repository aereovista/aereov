'use client';

import Link from 'next/link';

type PackageFeature = {
  text: string;
  highlighted?: boolean;
};

type Package = {
  title: string;
  subtitle: string;
  price: string;
  features: PackageFeature[];
  isFeatured: boolean;
  ctaText: string;
  ctaHref: string;
};

const packages: Package[] = [
  {
    title: 'Monitoreo Esencial',
    subtitle: 'Visión clara para control de progreso.',
    price: 'Desde $280.000 /mes',
    features: [
      { text: '1 Sesión de Vuelo mensual' },
      { text: 'Ortofoto de alta resolución (2D)', highlighted: true },
      { text: 'Video de avance de obra (60s)' },
      { text: 'Reporte fotográfico de puntos clave' },
      { text: 'Entrega digital en 48hs' },
    ],
    isFeatured: false,
    ctaText: 'Consultar Plan',
    ctaHref: '#contacto',
  },
  {
    title: 'Gestión Integral',
    subtitle: 'El aliado estratégico para tu obra.',
    price: 'Desde $520.000 /mes',
    features: [
      { text: '2 Sesiones de Vuelo mensuales (Quincenal)', highlighted: true },
      { text: 'Ortofoto de alta resolución (2D) en cada visita', highlighted: true },
      { text: 'Videos de avance y timelapse de progreso', highlighted: true },
      { text: 'Reportes fotográficos detallados', highlighted: true },
      { text: 'Generación de Modelo 3D (DSM/DTM)', highlighted: true },
      { text: 'Cálculo de volúmenes (acopios, excavaciones)', highlighted: true },
      { text: 'Integración de datos con plataformas GIS/CAD', highlighted: true },
      { text: 'Entrega prioritaria en 72hs', highlighted: true },
    ],
    isFeatured: true,
    ctaText: 'Solicitar Presupuesto',
    ctaHref: '#contacto',
  },
  {
    title: 'Solución Corporativa',
    subtitle: 'Para proyectos complejos o necesidades específicas.',
    price: 'A Medida',
    features: [
      { text: 'Frecuencia de vuelos personalizada' },
      { text: 'Inspecciones técnicas de infraestructura' },
      { text: 'Modelado 3D avanzado y nube de puntos' },
      { text: 'Análisis termográfico o multiespectral' },
      { text: 'Soporte técnico y asesoramiento especializado' },
      { text: 'Desarrollo de integraciones y API (SaaS)'},
    ],
    isFeatured: false,
    ctaText: 'Solicitar Reunión',
    ctaHref: '#contacto',
  },
];

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const Packages = () => {
  // Nota: La lógica para abrir el modal de contacto se manejaría en el componente padre
  // o a través de un gestor de estado global, gatillada por el href '#contacto' o un onClick.
  return (
    <section id="paquetes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Nuestros <span className="text-blue-600">Planes</span> para Construcción
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            Optimiza tu proyecto con datos aéreos precisos y accionables. Elige el plan que se adapte a tu escala.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl flex flex-col transition-transform duration-300 hover:-translate-y-2
                ${pkg.isFeatured
                  ? 'bg-blue-700 text-white shadow-2xl transform md:scale-105 border-2 border-blue-800'
                  : 'bg-white shadow-lg border border-gray-200'
                }`}
            >
              {pkg.isFeatured && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-xl">
                  MÁS ELEGIDO
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-2 text-center ${pkg.isFeatured ? 'text-white' : 'text-blue-700'}`}>
                {pkg.title}
              </h3>
              <p className={`text-center mb-6 ${pkg.isFeatured ? 'text-blue-200' : 'text-gray-600'}`}>{pkg.subtitle}</p>
              <p className={`text-4xl font-extrabold text-center mb-6 ${pkg.isFeatured ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={`flex items-start ${pkg.isFeatured ? 'text-blue-100' : 'text-gray-700'}`}>
                    <CheckIcon className={pkg.isFeatured ? 'text-yellow-400 mt-1' : 'text-green-500 mt-1'} />
                    <span className={feature.highlighted ? 'font-semibold' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.ctaHref}
                className={`w-full text-center font-bold py-3.5 px-6 rounded-lg transition-all duration-300 mt-auto block text-lg
                  ${pkg.isFeatured
                    ? 'bg-white text-blue-700 hover:bg-gray-200'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                {pkg.ctaText}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-12 text-lg">
          ¿Necesitas algo diferente? {" "}
          <Link href="#contacto" className="text-blue-600 hover:text-blue-700 font-semibold underline">
            Contactanos
          </Link> {" "}
          y diseñamos una solución <strong className="text-gray-800">a la medida de tu proyecto</strong>.
        </p>
      </div>
    </section>
  );
};

export default Packages;