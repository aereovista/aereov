'use client';

import { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// IMPORTANTE: Reemplaza con tu ID real de Formspree
const FORMSPREE_URL = "https://formspree.io/f/mqabokng";
// IMPORTANTE: Reemplaza con tu Site Key real de reCAPTCHA
const RECAPTCHA_SITE_KEY = "6Lfa8XcrAAAAAIE3F-fo0N4-zzTp6mtqAdvP0gOo";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Reinicia el estado del formulario cuando el modal se abre/cierra
  useEffect(() => {
    if (isOpen) {
      setSuccess(null);
      setError(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!recaptchaValue) {
      setError('Por favor, confirmá que no sos un robot.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('g-recaptcha-response', recaptchaValue);

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess('¡Mensaje enviado! Nos pondremos en contacto con vos a la brevedad para hablar de tu proyecto.');
        form.reset();
        recaptchaRef.current?.reset();
      } else {
        setError('Ocurrió un error al enviar el mensaje. Por favor, intentá de nuevo o escribinos directamente a infoaereovista@gmail.com');
      }
    } catch (err) {
      setError('No se pudo enviar el mensaje. Asegurate de tener conexión a internet y volvé a intentar.');
    }
    setLoading(false);
  };

  if (!isOpen) return null; // No renderiza el modal si no está abierto

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose} // Cierra el modal al hacer clic fuera
    >
      <div
        className="relative max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto transform transition-transform duration-300 animate-slide-up"
        onClick={e => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-3xl font-light"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Solicitar <span className="text-blue-600">Presupuesto</span>
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Contanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución con drones.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="modal-nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
              <input
                type="text"
                id="modal-nombre"
                name="nombre"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="modal-empresa" className="block text-gray-700 text-sm font-bold mb-2">Empresa / Constructora</label>
              <input
                type="text"
                id="modal-empresa"
                name="empresa"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="modal-email" className="block text-gray-700 text-sm font-bold mb-2">Email de Contacto</label>
            <input
              type="email"
              id="modal-email"
              name="email"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="modal-telefono" className="block text-gray-700 text-sm font-bold mb-2">Teléfono (opcional)</label>
            <input
              type="tel"
              id="modal-telefono"
              name="telefono"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="modal-tipo_proyecto" className="block text-gray-700 text-sm font-bold mb-2">¿Sobre qué tipo de proyecto querés consultarnos?</label>
            <select
              id="modal-tipo_proyecto"
              name="tipo_proyecto"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            >
              <option value="">Seleccioná una opción</option>
              <option value="Edificación (residencial/comercial)">Edificación (residencial/comercial)</option>
              <option value="Infraestructura (rutas/puentes)">Infraestructura (rutas/puentes)</option>
              <option value="Movimiento de suelos/Topografía">Movimiento de suelos/Topografía</option>
              <option value="Inspección de estructuras">Inspección de estructuras</option>
              <option value="Seguimiento de avance de obra">Seguimiento de avance de obra</option>
              <option value="Otro">Otro (especificar en mensaje)</option>
            </select>
          </div>
          <div>
            <label htmlFor="modal-mensaje" className="block text-gray-700 text-sm font-bold mb-2">Contanos más sobre tu proyecto o necesidades</label>
            <textarea
              id="modal-mensaje"
              name="mensaje"
              rows={5}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              disabled={loading}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              ref={recaptchaRef}
            />
          </div>
          {success && <div className="text-green-600 text-center font-semibold mt-4">{success}</div>}
          {error && <div className="text-red-600 text-center font-semibold mt-4">{error}</div>}
          <div className="text-center">
            <button
              type="submit"
              className={`inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar Consulta"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
