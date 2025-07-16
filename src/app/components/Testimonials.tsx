'use client';

import React from 'react';
import Link from 'next/link';

type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote:
      'La información precisa de AereoVista nos permitió optimizar el movimiento de tierras en un 15% y mejorar drásticamente el seguimiento de obra. Su profesionalismo y los datos que nos entregaron fueron clave para cumplir los plazos.',
    name: 'Arq. Sofía Giménez',
    title: 'Jefa de Proyectos, Constructora "Punto Cero"',
  },
  {
    quote:
      'Para el monitoreo semanal de nuestra torre en construcción, AereoVista es indispensable. Las ortofotos y videos de progreso nos dan una visión clara y en tiempo real, facilitando la comunicación con inversores y la toma de decisiones.',
    name: 'Ing. Martín Acosta',
    title: 'Director de Obra, Grupo "Alturas"',
  },
  {
    quote:
      'Necesitábamos un modelo 3D exacto del terreno para una licitación compleja. AereoVista lo generó con una precisión impresionante y en tiempo récord. Su tecnología es un diferencial para nuestra empresa.',
    name: 'Lic. Andrea Paz',
    title: 'Gerente de Desarrollo, "Innova Urbis"',
  },
];

const Testimonials = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Título MEJORADO con el estilo consistente */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Lo Que Dicen Nuestros <span className="text-blue-600">Clientes</span> de Construcción
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"> {/* Párrafo ajustado a estilo consistente */}
            La confianza de ingenieros, arquitectos y jefes de obra que impulsan
            sus proyectos con Aereovista.
          </p>
        </div>
        {/* La cuadrícula se ajusta automáticamente para 3 elementos, sin cambios aquí */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto"> {/* Añadido max-w-7xl y mx-auto para centrar y dar más espacio */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            >
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-blue-600 font-semibold">
                {testimonial.title}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700">
            ¿Querés conocer cómo podemos optimizar tu próximo proyecto?{' '}
            <Link
              href="#contacto"
              className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors"
            >
              ¡Hablemos de tu obra!
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;