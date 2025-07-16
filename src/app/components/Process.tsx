// app/components/Process.tsx
import {
  ChatBubbleLeftRightIcon, // Para Contacto/Planificación
  CameraIcon, // Reemplazando DroneIconPlaceholder para Captura de Datos
  ComputerDesktopIcon, // Para Procesamiento de Datos
  ChartBarIcon, // Para Análisis/Reportes/Entrega de Datos
} from '@heroicons/react/24/solid';


const processSteps = [
  {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />, // Icono de diálogo/comunicación
    title: 'Planificación Estratégica',
    description: (
      <>
        Definimos los objetivos de tu proyecto, mapeamos la zona de interés y coordinamos{" "}
        <strong>vuelos seguros y eficientes</strong> según normativa ANAC.
      </>
    ),
  },
  {
    icon: <CameraIcon className="h-8 w-8 text-white" />, // Usamos CameraIcon como un ícono más adecuado para "Captura de Datos"
    title: 'Captura de Datos',
    description: (
      <>
        Nuestros pilotos certificados realizan la adquisición de{" "}
        <strong>imágenes aéreas, videos de alta resolución y datos fotogramétricos</strong>{" "}
        con equipos especializados.
      </>
    ),
  },
  {
    icon: <ComputerDesktopIcon className="h-8 w-8 text-white" />, // Icono de computadora/procesamiento
    title: 'Procesamiento Analítico',
    description: (
      <>
        Procesamos los datos para generar{" "}
        <strong>ortofotos georreferenciadas, modelos 3D y cálculos de volumen precisos</strong>{" "}
        que transforman la información en valor.
      </>
    ),
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-white" />, // Icono de gráfico/reporte
    title: 'Entrega y Soporte',
    description: (
      <>
        Accedé a tus entregables (mapas, modelos, informes) a través de una{" "}
        <strong>plataforma segura y privada</strong>. Te brindamos soporte para su integración.
      </>
    ),
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16"> {/* Aumentado el margen inferior para el título */}
          {/* Título mejorado para consistencia y impacto */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Nuestro <span className="text-blue-600">Proceso</span> de Trabajo
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"> {/* Texto más grande y centrado */}
            Transformamos tus necesidades de construcción en datos aéreos accionables.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto"> {/* Añadido max-w-7xl y mx-auto para centrar y dar más espacio */}
          {/* Línea conectora horizontal para desktop */}
          {/* Posición de la línea ajustada para que los círculos la crucen por el centro */}
          <div className="hidden md:block absolute top-[calc(50%-2px)] left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 text-center relative"> {/* Añadido gap-x y gap-y para más espacio */}
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center z-10">
                {/* Círculo del icono con tamaño ajustado y mb-8 */}
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 mb-8 border-4 border-white shadow-xl">
                  {step.icon}
                </div>
                {/* Título con número de paso y mb-4 */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">{i + 1}. {step.title}</h3>
                {/* Descripción con text-base y leading-relaxed */}
                <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
