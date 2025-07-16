import {
  ShieldCheckIcon,
  ClockIcon,
  CubeIcon,
  // CurrencyDollarIcon, // Ya no es necesario si eliminamos esa tarjeta
} from '@heroicons/react/24/solid';

const reasons = [
  {
    title: "Experiencia y Seguridad Certificada",
    desc: <>Nuestros pilotos están <strong>certificados y especializados</strong> en operaciones para obras, garantizando vuelos seguros y conforme a la normativa.</>,
    icon: (
      <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
    ),
  },
  {
    title: "Datos Cruciales en Tiempo Récord",
    desc: <>Recibí tus <strong>ortofotos, modelos y análisis de avance</strong> en el menor tiempo posible, para una toma de decisiones ágil y eficiente.</>,
    icon: (
      <ClockIcon className="w-8 h-8 text-blue-600" />
    ),
  },
  {
    title: "Precisión y Calidad en Cada Dato",
    desc: <>Transformamos las capturas del drone en <strong>información geoespacial precisa y modelos 3D detallados</strong>, listos para tu equipo técnico.</>,
    icon: (
      <CubeIcon className="w-8 h-8 text-blue-600" />
    ),
  },
  // La tarjeta de "Transparencia y Valor Asegurado" ha sido eliminada para tener 3 tarjetas.
  /*
  {
    title: "Transparencia y Valor Asegurado",
    desc: <><strong>Precios claros y asesoramiento completo</strong> en cada etapa, maximizando el retorno de tu inversión en tecnología drone.</>,
    icon: (
      <CurrencyDollarIcon className="w-8 h-8 text-blue-600" />
    ),
  },
  */
];

const WhyUs = () => (
  <section id="porque-elegirnos" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          ¿Por qué <span className="text-blue-600">Elegir</span> Aereovista?
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Tu socio estratégico para transformar la gestión de tus proyectos de construcción con innovación y resultados.
        </p>
      </div>
      {/* CAMBIOS CLAVE AQUÍ: grid-cols-3 y max-w-7xl */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-12 max-w-7xl mx-auto">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-10 border border-gray-100 shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-8 shadow-sm">
              {reason.icon}
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{reason.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;