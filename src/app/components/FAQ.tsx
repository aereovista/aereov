'use client';

import { useState } from 'react';
import Link from 'next/link'; // Asegúrate de que Link esté importado si se usa en el CTA final

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: '¿Qué tipo de proyectos de construcción pueden beneficiarse?',
    answer:
      'Nuestros servicios son ideales para un amplio rango de proyectos: desde el **seguimiento de obras de edificación** (residencial, comercial), hasta el **mapeo de grandes terrenos para desarrollo**, **inspección de infraestructuras** (puentes, caminos) y **control de volúmenes de movimiento de tierras**. Cualquier proyecto que requiera datos aéreos precisos y periódicos puede optimizarse con Aereovista.',
  },
  {
    question: '¿Qué normativa rige el vuelo de drones para obras?',
    answer:
      'Cumplimos estrictamente con todas las regulaciones de la **ANAC (Administración Nacional de Aviación Civil)** para operaciones con drones. Realizamos un estudio de viabilidad de cada sitio para asegurar el cumplimiento normativo y la seguridad, especialmente en zonas urbanas o cercanas a aeropuertos. Tu proyecto estará en manos seguras y legales.',
  },
  {
    question: '¿Qué tipo de entregables recibiré y para qué me sirven?',
    answer:
      'Dependiendo del servicio contratado, recibirás **ortofotos georreferenciadas** (mapas 2D precisos), **modelos 3D del terreno y de estructuras** (para visualización y análisis), **videos de progreso de obra** (timelapses o recorridos), e **informes de volúmenes de acopio y excavación**. Estos datos te servirán para planificar, medir avances, realizar inspecciones, detectar anomalías y comunicar el progreso a inversores.',
  },
  {
    question: '¿Cuánto tiempo demoran en procesar y entregar los datos?',
    answer:
      'Entendemos la urgencia en obra. Nuestro objetivo es entregar los datos procesados y listos para usar en un plazo de **48 a 72 horas hábiles** después de la captura en campo, dependiendo de la complejidad del servicio (fotogrametría, análisis de volumen, etc.). Garantizamos la rapidez sin comprometer la precisión.',
  },
  {
    question: '¿Necesitamos tener personal o equipos específicos en obra?',
    answer:
      '¡No! Nuestro servicio es integral. Nosotros nos encargamos de todo: desde la planificación del vuelo, la operación del drone en campo (con nuestros pilotos certificados) hasta el procesamiento y la entrega de los datos listos para tu equipo. Tu constructor no necesita invertir en equipos ni capacitar personal.',
  },
  {
    question: '¿Es posible obtener los datos brutos o solo los procesados?',
    answer:
      'Podemos entregarte tanto los datos procesados (ortofotos, modelos 3D, videos editados) como el **material en bruto** (fotos y videos originales) si lo necesitas para análisis internos o para integrar con otros softwares específicos de tu empresa. Adaptamos la entrega a tus requerimientos.',
  },
  {
    question: '¿Pueden realizar vuelos periódicos para seguimiento de obra?',
    answer:
      '¡Absolutamente! Nuestro servicio de **seguimiento de obra es uno de los más solicitados**. Podemos establecer una frecuencia de vuelos periódica (semanal, quincenal, mensual) para que tengas una visión actualizada y constante del progreso de tu proyecto, facilitando el control y la toma de decisiones. Esto es clave para el futuro SaaS.',
  },
  {
    question: '¿Cómo coordinamos el vuelo en el sitio de la obra?',
    answer:
      'La coordinación es sencilla. Una vez confirmado el servicio, nuestro equipo se pondrá en contacto para establecer el día y la franja horaria más convenientes para el vuelo, siempre priorizando las condiciones climáticas óptimas y la seguridad en la obra. Nos adaptamos a los tiempos de tu proyecto.',
  },
  {
    question: '¿Cómo podemos integrar estos datos en nuestros flujos de trabajo actuales?',
    answer:
      'Nuestros entregables son compatibles con los softwares de gestión de proyectos y diseño más comunes en la construcción (ej. AutoCAD, Revit, GIS). Además, podemos asesorarte sobre las mejores prácticas para integrar estos datos en tus flujos de trabajo actuales, aumentando la eficiencia de tu equipo. Estamos desarrollando herramientas para simplificar aún más esta integración a futuro.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null); // Cambiado a null para que todas estén cerradas al inicio

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          {/* Título mejorado para consistencia y impacto, pero más conciso */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="text-blue-600">Preguntas</span> Frecuentes
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"> {/* Párrafo ajustado a estilo consistente */}
            Resolvemos tus dudas más comunes sobre el uso de drones en la construcción.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-900">{item.question}</span>
                  <span
                    className={`text-blue-600 text-2xl transition-transform transform ${open === index ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </div>
              </button>
              {open === index && (
                <div className="mt-4 text-gray-700 animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
