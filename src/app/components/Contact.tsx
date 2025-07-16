'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const FORMSPREE_URL = "https://formspree.io/f/mqabokng"; // Asegurate que este sea tu ID de Formspree

const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // handle submit
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
        // Mejorar el mensaje de error para dar una alternativa
        setError('Ocurrió un error al enviar el mensaje. Por favor, intentá de nuevo o escribinos directamente a infoaereovista@gmail.com');
      }
    } catch (err) {
      setError('No se pudo enviar el mensaje. Asegurate de tener conexión a internet y volvé a intentar.');
    }
    setLoading(false);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* Título MEJORADO para ser más conciso y consistente */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="text-blue-600">Contactanos</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
            ¿Tenés un proyecto de construcción en mente y querés optimizarlo con tecnología drone?
            Contanos sobre tus necesidades y te ayudaremos a encontrar la mejor solución.
            <br />
            También podés escribirnos directamente a:{' '}
            <a href="mailto:infoaereovista@gmail.com" className="underline text-blue-600 hover:text-blue-700 font-semibold transition-colors">infoaereovista@gmail.com</a>
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-gray-700 text-sm font-bold mb-2">Empresa / Constructora</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email de Contacto</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Teléfono (opcional)</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="tipo_proyecto" className="block text-gray-700 text-sm font-bold mb-2">¿Sobre qué tipo de proyecto querés consultarnos?</label>
              <select
                id="tipo_proyecto"
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
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Contanos más sobre tu proyecto o necesidades</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={loading}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6Lfa8XcrAAAAAIE3F-fo0N4-zzTp6mtqAdvP0gOo" // Asegurate de que esta sea tu Site Key de reCAPTCHA
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
    </section>
  );
};

export default Contact;
