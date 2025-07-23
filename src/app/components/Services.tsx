'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BuildingOffice2Icon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  PhotoIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';

import ContactModal from './ContactModal';

// --- ESTRUCTURA SIMPLIFICADA A 2 PAQUETES PROFESIONALES ---

const servicePackages = [
  {
    packageName: "Seguimiento y Documentación Visual",
    packageIcon: <BriefcaseIcon className="h-10 w-10 text-blue-600" />,
    packageDescription: "La solución completa para un registro visual impecable del avance de su obra, ideal para informes de gestión, marketing y control de calidad.",
    items: [
      {
        icon: <BuildingOffice2Icon className="h-8 w-8 text-white" />,
        title: "Seguimiento de Obra Aéreo",
        description: "Monitoreo periódico con imágenes y videos de alta resolución para un control total del avance, detectando desvíos a tiempo.",
        callToAction: "Solicitar Presupuesto",
      },
      {
        icon: <CalendarDaysIcon className="h-8 w-8 text-white" />,
        title: "Reportes y Time-Lapse",
        description: "Documentación periódica del progreso, creando informes visuales y videos time-lapse impactantes para inversores y clientes.",
        callToAction: "Solicitar Presupuesto",
      },
      {
        icon: <PhotoIcon className="h-8 w-8 text-white" />,
        title: "Marketing del Proyecto",
        description: "Fotografía y video aéreo profesional para presentar su proyecto, documentar hitos y potenciar sus estrategias de venta.",
        callToAction: "Solicitar Presupuesto",
      },
    ]
  },
  {
    packageName: "Análisis Técnico y Datos de Precisión",
    packageIcon: <CpuChipIcon className="h-10 w-10 text-blue-600" />,
    packageDescription: "Transformamos imágenes en datos medibles. La solución definitiva para optimizar costos, gestionar materiales y realizar inspecciones técnicas seguras.",
    items: [
      {
        icon: <CubeTransparentIcon className="h-8 w-8 text-white" />,
        title: "Fotogrametría y Mapeo 3D",
        description: "Generamos ortofotos georreferenciadas y modelos 3D precisos para un análisis técnico detallado de terrenos y estructuras.",
        callToAction: "Solicitar Presupuesto",
      },
      {
        icon: <ChartBarIcon className="h-8 w-8 text-white" />,
        title: "Cálculo de Volúmenes y Acopios",
        description: "Mediciones exactas de movimientos de tierra y stock de materiales para una gestión eficiente y una reducción de costos certificada.",
        callToAction: "Solicitar Presupuesto",
      },
      {
        icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
        title: "Inspección Técnica de Fachadas 3D",
        description: "Evaluación de estructuras críticas con modelos 3D de alta definición. Detecte fisuras y patologías sin andamios ni riesgos.",
        callToAction: "Solicitar Presupuesto",
      },
    ]
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Nuestras <span className="text-blue-600">Soluciones Aéreas</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
            Ofrecemos paquetes de servicios diseñados para cada necesidad de su proyecto, desde la documentación visual hasta el análisis de datos más complejo.
          </p>
        </div>

        {servicePackages.map((pkg, pkgIndex) => (
          <div key={pkgIndex} className="mb-24">
            <div className="text-center mb-12 border-b-2 border-blue-200 pb-6">
              <div className="flex justify-center items-center gap-4">
                {pkg.packageIcon}
                <h3 className="text-3xl font-bold text-gray-800">{pkg.packageName}</h3>
              </div>
              <p className="text-gray-600 mt-3 text-md max-w-2xl mx-auto">{pkg.packageDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-7xl mx-auto">
              {pkg.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white p-8 rounded-xl text-center border border-gray-200 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div>
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto mb-6 shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">{item.description}</p>
                  </div>

                  {/* Botón que SIEMPRE abre el modal */}
                  <button
                    onClick={openModal}
                    className="mt-auto inline-block px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-md"
                  >
                    {item.callToAction}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Services;
