import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo con la ruta correcta */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/video1.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      {/* Capa oscura: opacidad reducida a bg-black/40 para mostrar más el video */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="text-center text-white relative z-20 px-4">
        {/* Título de la versión orientada a construcción, ahora con estilo consistente */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Control Total en Obra: <br className="md:hidden"/>Datos Aéreos para <span className="text-blue-400">Construcción</span>
        </h1>
        {/* Párrafo de la versión orientada a construcción con estilo consistente */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Transformamos la gestión de tus proyectos con{" "}
          <strong>fotogrametría, seguimiento de avance e inspecciones</strong> precisas desde el aire.
        </p>
        {/* CTA "Explorá Nuestros Servicios" que lleva a #servicios */}
        <Link href="#servicios" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 inline-block">
          Explorá Nuestros Servicios
        </Link>
      </div>
    </section>
  );
};

export default Hero;
