'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import ContactModal from './ContactModal';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setOpenMenu(false); 
  };
  const closeModal = () => setIsModalOpen(false);

  // --- ENLACES ACTUALIZADOS CON LA NUEVA SECCIÓN DE BLOG ---
  const navLinks = [
    { href: '/#servicios', label: 'Servicios' },
    { href: '/#porque-elegirnos', label: 'Beneficios' },
    { href: '/#portafolio', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' }, // <-- NUEVO ENLACE AL BLOG
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* El logo ahora apunta a la raíz del sitio "/" */}
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold text-gray-800">
                Aereo<span className="text-blue-600">Vista</span>
              </span>
              <span className="ml-3 text-base text-gray-500 font-medium hidden md:block group-hover:text-blue-700 transition-colors">
                Soluciones Aéreas para Construcción
              </span>
            </Link>

            {/* Menú de Navegación para Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors text-lg">
                  {link.label}
                </Link>
              ))}
              {/* CTA principal en el Header */}
              <button
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform"
              >
                Solicitar Presupuesto
              </button>
            </nav>

            {/* Botón de Menú para Móvil */}
            <div className="md:hidden">
              <button onClick={() => setOpenMenu(!openMenu)} className="text-gray-800 focus:outline-none p-2">
                {openMenu ? (
                  <XMarkIcon className="w-8 h-8 text-blue-600" />
                ) : (
                  <Bars3Icon className="w-8 h-8 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Desplegable para Móvil */}
        {openMenu && (
          <div className="md:hidden bg-white shadow-lg pb-4 animate-fade-in-down">
            <nav className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpenMenu(false)}
                  className="block py-2 px-4 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-center"
                >
                  {link.label}
                </Link>
              ))}
              {/* CTA para móvil */}
              <button
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform mt-4"
              >
                Solicitar Presupuesto
              </button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
