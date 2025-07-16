'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  EnvelopeIcon,
  MapPinIcon, 
  PhoneIcon,
} from '@heroicons/react/24/solid';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/aereovista', // Reemplazá con tu URL
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/aereovista', // Reemplazá con tu URL
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/54911xxxxxxxx', // Reemplazá con tu número
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.807-1.6-5.87 0-6.185 5.021-11.206 11.206-11.206 3.037 0 5.94 1.187 8.103 3.354 2.163 2.166 3.354 5.07 3.354 8.104 0 6.185-5.021 11.206-11.206 11.206-1.954 0-3.844-.509-5.482-1.462l-6.229 1.632zm1.745-4.498l.582.358c1.391.859 3.018 1.314 4.708 1.314 5.071 0 9.206-4.135 9.206-9.206 0-5.072-4.135-9.207-9.206-9.207s-9.206 4.135-9.206 9.207c0 1.579.404 3.125 1.155 4.498l.004-.002zM7.348 6.438c.111-.318.291-.652.486-.806.195-.154.433-.217.653-.217.22 0 .44.063.635.195.195.132.375.466.486.784.111.318.232.74.232.898.029.17-.074.455-.173.57-.099.115-.224.237-.348.337-.124.1-.283.155-.47.056-.187-.098-.375-.246-.57-.456-.195-.21-.4-.492-.596-.757-.195-.265-.433-.668-.433-.997s.03-.435.03-.435zM12 17c-1.916 0-3.328-.588-4.469-1.571-.871-.741-1.395-1.749-1.395-2.73 0-.981.524-1.99 1.395-2.731.871-.741 1.953-1.11 3.067-1.11 1.114 0 2.228.37 3.067 1.11.871.741 1.395 1.749 1.395 2.731 0 .981-.524 1.99-1.395 2.731-1.141.983-2.553 1.571-4.469 1.571zm-.654-1.28c1.554 0 2.508-.344 3.176-.902.584-.492.937-1.222.937-1.972 0-.751-.353-1.482-.937-1.974-.668-.559-1.622-.904-3.176-.904-1.554 0-2.508.345-3.176.904-.584.492-.937 1.222-.937 1.974 0 .75.353 1.48.937 1.972.668.558 1.622.902 3.176.902zm-3.346-6.72c.111-.318.291-.652.486-.806.195-.154.433-.217.653-.217.22 0 .44.063.635.195.195.132.375.466.486.784.111.318.232.74.232.898.029.17-.074.455-.173.57-.099.115-.224.237-.348.337-.124.1-.283.155-.47.056-.187-.098-.375-.246-.57-.456-.195-.21-.4-.492-.596-.757-.195-.265-.433-.668-.433-.997s.03-.435.03-.435z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [modal, setModal] = useState<null | "terms" | "privacy">(null);

  return (
    <>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-800 text-xl font-bold mb-2">
                Aereovista: <span className="text-blue-600">Soluciones Aéreas para Construcción</span>
              </p>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Aereovista. Todos los derechos reservados.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                <strong>Vuelos 100% legales y asegurados</strong> bajo normativa ANAC.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <button
                  className="underline text-xs text-gray-400 hover:text-blue-600 transition"
                  onClick={() => setModal("terms")}
                  type="button"
                >
                  Términos y Condiciones
                </button>
                <span className="text-xs text-gray-300">|</span>
                <button
                  className="underline text-xs text-gray-400 hover:text-blue-600 transition"
                  onClick={() => setModal("privacy")}
                  type="button"
                >
                  Política de Privacidad
                </button>
              </div>
            </div>
            
            <div className="text-gray-600 mt-4 md:mt-0 text-center md:text-right">
              <p className="font-semibold mb-2">Contacto Rápido</p>
              <ul className="space-y-1">
                <li>
                  <Link href="mailto:infoaereovista@gmail.com" className="hover:text-blue-600 transition-colors flex items-center justify-center md:justify-end">
                    <EnvelopeIcon className="h-4 w-4 mr-2" /> infoaereovista@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+54911xxxxxxxx" className="hover:text-blue-600 transition-colors flex items-center justify-center md:justify-end">
                    <PhoneIcon className="h-4 w-4 mr-2" /> +54 9 11 7065-5085
                  </Link>
                </li>
                {/* <li>
                  <span className="flex items-center justify-center md:justify-end">
                    <MapPinIcon className="h-4 w-4 mr-2" /> Av. Falsa 123, CABA
                  </span>
                </li>
                */}
              </ul>
            </div>
            
            <div className="flex justify-center space-x-6 mt-4 md:mt-0 md:ml-8">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto p-8 relative animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-3xl font-light"
              onClick={() => setModal(null)}
              aria-label="Cerrar"
              type="button"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              {modal === "terms" ? "Términos y Condiciones del Servicio" : "Política de Privacidad de Datos"}
            </h2>
            <div className="text-gray-700 text-sm max-h-[60vh] overflow-y-auto space-y-3 pr-2">
              {modal === "terms" ? (
                <>
                  <p>Este sitio web ofrece <strong>servicios profesionales de fotografía aérea, videografía, fotogrametría e inspección con drones</strong>, específicamente diseñados para la <strong>industria de la construcción y desarrollo de proyectos</strong>. Al utilizar nuestros servicios o nuestro sitio, usted acepta cumplir con todas las leyes y regulaciones locales e internacionales aplicables, incluyendo las normativas de vuelo de drones.</p>
                  <p>Los materiales y datos técnicos entregados (como ortofotos, modelos 3D, videos de avance) son para el <strong>uso comercial y técnico exclusivo del cliente</strong> en relación con su proyecto de construcción, y no pueden ser redistribuidos o revendidos a terceros sin consentimiento escrito de Aereovista. Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento, con notificación previa en nuestro sitio web.</p>
                  <p>Para vuelos en zonas restringidas, propiedades privadas o en condiciones especiales, la obtención de <strong>permisos y seguros adicionales</strong> es responsabilidad compartida con el cliente, y Aereovista brindará todo el asesoramiento necesario.</p>
                </>
              ) : (
                <>
                  <p>En Aereovista, valoramos y protegemos su privacidad. Los datos personales (como nombre, empresa, email, teléfono) que usted nos proporciona a través de nuestros formularios de contacto o durante la contratación de servicios son utilizados <strong>exclusivamente para la gestión de su consulta o proyecto</strong>. No compartimos, vendemos ni alquilamos su información a terceros.</p>
                  <p>No almacenamos datos sensibles de pago ni realizamos envíos masivos de correo sin su consentimiento explícito (opt-in). Usted tiene derecho a solicitar acceso, rectificación o eliminación de sus datos personales en cualquier momento, enviando un correo electrónico a <strong>infoaereovista@gmail.com</strong>.</p>
                  <p>Nuestro sitio web utiliza cookies técnicas para mejorar la experiencia de navegación, pero no recopilamos información de seguimiento extensiva para fines publicitarios.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}