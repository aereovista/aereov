// -----------------------------------------------------------------------------
// Archivo: app/components/About.tsx
// -----------------------------------------------------------------------------
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section id="nosotros" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        {/*
                          IMPORTANTE: Cambia esta imagen por una que refleje tu trabajo en construcción.
                          Puede ser un drone en una obra, un mapa 3D en pantalla, o un miembro del equipo en un sitio de construcción.
                        */}
                        <Image
                            src="/image/droneaerovista.png"
                            alt="Equipo de Aereovista trabajando en un sitio de construcción"
                            width={1260}
                            height={750}
                            className="rounded-xl shadow-2xl w-full"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        {/* Título mejorado para consistencia y impacto */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                            Sobre Aereovista: <span className="text-blue-600">Innovación</span> para tu Construcción
                        </h2>
                        {/* Párrafo 1: Misión, valor principal y beneficios */}
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            En Aereovista, somos profesionales apasionados por la <strong>tecnología drone</strong> y su impacto transformador en la <strong>industria de la construcción</strong>. Nuestra misión es clara: proporcionar a ingenieros, arquitectos y jefes de obra <strong>herramientas visuales y datos geoespaciales precisos</strong> que optimicen cada fase de sus proyectos, impulsando la <strong>eficiencia, reducción de costos y mejora de la seguridad</strong> en cada obra.
                        </p>
                        {/* Párrafo 2: Metodología, adaptabilidad y enfoque en datos */}
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Utilizamos equipos de última generación y metodologías avanzadas de <strong>fotogrametría e inspección aérea</strong> para transformar la información cruda en inteligencia accionable. Entendemos la dinámica y las exigencias de la construcción moderna, por eso nuestras soluciones son <strong>escalables</strong> y <strong>adaptables</strong> a la magnitud de cualquier proyecto, buscando ser el punto central de tus datos de obra.
                        </p>
                        {/* Párrafo 3: Visión a futuro, innovación y sociedad estratégica */}
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Constantemente exploramos nuevas formas de integrar la <strong>inteligencia artificial y el análisis de datos</strong> para ofrecer soluciones aún más potentes en el futuro, consolidándonos como tu socio tecnológico estratégico en la construcción. Estamos aquí para ayudarte a construir con una visión innovadora y resultados tangibles.
                        </p>
                        {/* Botón de Contacto con estilo consistente */}
                        <Link href="#contacto" className="text-blue-600 font-semibold hover:text-blue-500 transition-colors text-lg">
                            Conversemos sobre tu proyecto &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;