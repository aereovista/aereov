// app/blog/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// --- BASE DE DATOS DE ARTÍCULOS EXPANDIDA A 6 POSTS ---
const blogPosts = [
  // --- Posts Existentes ---
  {
    slug: "optimizacion-obra-drones-fotogrametria-2025",
    title: "Cómo la Fotogrametría con Drones Optimiza tu Obra en 2025",
    image: "/image/fotometria-2.jpg",
    excerpt: "Descubre cómo los modelos 3D y los datos topográficos exactos te permiten tomar decisiones informadas, reducir costos y cumplir plazos en Buenos Aires.",
    date: "14 de Julio, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">En la industria de la construcción en Argentina, la eficiencia y la precisión no son un lujo, son la base de la rentabilidad. Un error de cálculo, un desvío no detectado o una mala planificación pueden costar millones. Es aquí donde la <strong>fotogrametría con drones</strong> se ha consolidado en 2025 como la tecnología más disruptiva y de mayor retorno de inversión para cualquier proyecto en Buenos Aires y el resto del país.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">¿Qué es la Fotogrametría y Por Qué Debería Importarte?</h2>
      <p class="text-lg leading-relaxed mb-4">La fotogrametría es la ciencia que permite obtener datos precisos del mundo real a partir de fotografías. En <strong>AEREovista</strong>, planificamos un vuelo automatizado con nuestros drones sobre el área de tu obra. El drone captura cientos de imágenes georreferenciadas que, una vez procesadas con software especializado, se convierten en dos productos fundamentales:</p>
      <ul class="list-disc list-inside space-y-3 pl-5 text-lg">
        <li><strong>Ortomosaicos de Alta Resolución:</strong> Un "Google Maps" privado y actualizado de tu obra, con una resolución tan alta que podés hacer zoom y ver cada detalle. Esencial para la planificación logística.</li>
        <li><strong>Modelos 3D Digitales (DSM/DTM):</strong> Una réplica tridimensional exacta de tu terreno y estructuras. Una herramienta invaluable para análisis, mediciones y presentaciones.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">El Impacto Real: Ahorro de Costos y Reducción de Riesgos</h2>
      <p class="text-lg leading-relaxed mb-4">El verdadero valor de la fotogrametría se ve en la cuenta de resultados. Con los datos que proporcionamos, podés:</p>
      <ul class="list-disc list-inside space-y-3 pl-5 text-lg">
        <li><strong>Calcular Volúmenes con Precisión del 99%:</strong> Olvidate de las estimaciones. Medí con exactitud el <strong>movimiento de tierras</strong>, el volumen de los acopios de material y certificá el trabajo de tus contratistas sin margen de error.</li>
        <li><strong>Detectar Desvíos Tempranamente:</strong> Al superponer el modelo 3D de la obra real sobre tus planos en CAD o BIM, detectás cualquier desviación del diseño original antes de que se convierta en un problema costoso y complejo de solucionar.</li>
        <li><strong>Optimizar la Planificación y Logística:</strong> Con una ortofoto actualizada, tu equipo puede planificar la ubicación de grúas, el acopio de materiales y las vías de acceso de la forma más eficiente posible, ahorrando tiempo y combustible.</li>
      </ul>
      <p class="mt-6 text-lg font-semibold">En AEREovista, no entregamos imágenes. Entregamos inteligencia de negocio. Datos que te permiten construir más rápido, de forma más segura y con un control total sobre tus costos.</p>
    `
  },
  {
    slug: "monitoreo-aereo-seguimiento-de-obra-argentina",
    title: "Monitoreo Aéreo: El Ojo Que No Descansa en Tu Construcción",
    image: "/image/drones.jpg",
    excerpt: "Entendé cómo el seguimiento regular con drones facilita la gestión de plazos, el control de recursos y la comunicación con inversores y equipos en sitio.",
    date: "20 de Junio, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">La gestión de una obra es un desafío constante. Coordinar equipos, controlar plazos, gestionar recursos y, sobre todo, mantener informados a todos los stakeholders (inversores, clientes, directivos) es una tarea monumental. El <strong>seguimiento de obra con drones</strong> se ha convertido en la solución definitiva para centralizar la información y mejorar la comunicación a todos los niveles.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Más Allá de una Simple Foto: Reportes de Valor</h2>
      <p class="text-lg leading-relaxed mb-4">Un servicio de monitoreo aéreo profesional como el de <strong>AEREovista</strong> no consiste en entregar un puñado de fotos sueltas. Se trata de crear un reporte periódico (semanal, quincenal o mensual) que se convierte en una herramienta de gestión indispensable. Cada reporte incluye:</p>
      <ul class="list-disc list-inside space-y-3 pl-5 text-lg">
        <li><strong>Videos de Progreso:</strong> Un recorrido cinematográfico de 60-90 segundos que muestra de forma clara y dinámica los avances desde la última visita. Ideal para presentaciones y para mantener motivado al equipo.</li>
        <li><strong>Galería Fotográfica de Hitos:</strong> Documentamos con imágenes de alta resolución los puntos clave del avance: finalización de una losa, montaje de estructuras, etc.</li>
        <li><strong>Comparativas Visuales:</strong> Colocamos imágenes del "antes" y el "después" para que el progreso sea evidente e innegable.</li>
        <li><strong>Videos Timelapse:</strong> Condensamos semanas o meses de trabajo en un video impactante que muestra la evolución completa del proyecto.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">El Beneficio para Inversores y Clientes</h2>
      <p class="text-lg leading-relaxed mb-4">Para un inversor o un cliente final, la incertidumbre es el mayor enemigo. Un reporte de avance periódico y profesional genera una confianza incalculable. Demuestra transparencia, control y profesionalismo, fortaleciendo la relación y facilitando futuras inversiones. Es la mejor forma de decir "tu dinero está trabajando bien" sin necesidad de una sola palabra.</p>
    `
  },
  {
    slug: "drones-seguridad-prevencion-riesgos-obra",
    title: "Drones: Mejorando la Seguridad y Reduciendo Riesgos en Obra",
    image: "/image/djimini4pro.jpg",
    excerpt: "Conoce el impacto de las inspecciones aéreas en la prevención de accidentes, la detección de anomalías y el cumplimiento de normativas ANAC en tu obra.",
    date: "15 de Mayo, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">La seguridad es la prioridad número uno y la mayor responsabilidad en cualquier sitio de construcción. Un accidente no solo tiene consecuencias humanas trágicas, sino que también puede generar enormes costos y retrasos. La <strong>inspección con drones</strong> es una tecnología revolucionaria que permite mejorar la seguridad de forma proactiva, cumpliendo con la <strong>normativa ANAC</strong> y protegiendo a tu equipo.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Inspección Segura de Zonas de Difícil Acceso</h2>
      <p class="text-lg leading-relaxed mb-4">Tradicionalmente, inspeccionar una fachada, una cubierta, un andamio o una estructura en altura implicaba un riesgo significativo para el personal. Con los drones, este riesgo se elimina por completo.</p>
      <ul class="list-disc list-inside space-y-3 pl-5 text-lg">
        <li><strong>Inspección de Fachadas 3D:</strong> Generamos modelos tridimensionales de alta definición que permiten a los arquitectos analizar la fachada desde su computadora, detectando fisuras, humedad o problemas estructurales sin necesidad de andamios.</li>
        <li><strong>Revisión de Cubiertas y Techos:</strong> Identificamos problemas de impermeabilización, daños estructurales o necesidad de mantenimiento en techos de forma rápida y segura.</li>
        <li><strong>Monitoreo de Seguridad General:</strong> Desde el aire, podemos verificar que el personal utilice el equipo de protección adecuado (cascos, arneses), que las zonas de acopio estén ordenadas y que las vías de circulación estén despejadas.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">Cumplimiento y Documentación</h2>
      <p class="text-lg leading-relaxed mb-4">Nuestros vuelos y reportes sirven como una documentación fehaciente del estado de la obra y de las medidas de seguridad implementadas. En <strong>AEREovista</strong>, todos nuestros pilotos están certificados y operan bajo los más estrictos protocolos de seguridad y cumplimiento de la normativa vigente en Argentina, dándote la tranquilidad que necesitás para enfocarte en construir.</p>
    `
  },
  // --- NUEVOS ARTÍCULOS ---
  {
    slug: "roi-drones-construccion-argentina",
    title: "El ROI de un Drone en tu Obra: Más Allá del Video Bonito",
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Analizamos el Retorno de la Inversión al contratar servicios de drones. Cómo se traduce la data aérea en ahorro tangible y mayor rentabilidad para tu proyecto.",
    date: "28 de Julio, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">Al evaluar una nueva tecnología, la pregunta más importante para cualquier desarrollador o gerente de proyecto es simple: ¿cuál es el <strong>Retorno de la Inversión (ROI)</strong>? Contratar un servicio de drones para construcción no es un gasto en marketing, es una inversión en eficiencia y control. Vamos a desglosar cómo cada peso invertido en datos aéreos se traduce en un ahorro significativo.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Midiendo lo Inmedible: El Costo de la Imprecisión</h2>
      <p class="text-lg leading-relaxed mb-4">El mayor costo oculto en una obra es la imprecisión. Una mala estimación en el movimiento de suelos puede llevar a pagar de más a los contratistas. Un desvío no detectado puede requerir demoliciones y retrabajos costosos. La fotogrametría elimina estas variables.</p>
      <p class="text-lg leading-relaxed mb-4"><strong>Ejemplo Real:</strong> Un cliente necesitaba verificar el volumen de tierra extraído para una excavación. La estimación del contratista era de 5,000 m³. Nuestro relevamiento con drone y el cálculo de volúmenes reveló que el volumen real era de 4,650 m³. Ese 7% de diferencia, a valores de mercado en Buenos Aires, representó un <strong>ahorro directo que pagó nuestro servicio anual en un solo trabajo</strong>.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">El ROI en Tiempo y Seguridad</h2>
      <p class="text-lg leading-relaxed mb-4">El tiempo también es dinero. Una inspección de cubierta que tradicionalmente llevaría un día entero con personal y andamios, se realiza con un drone en menos de una hora, sin riesgos para el personal. Reducir el tiempo de inspección acelera la toma de decisiones y mantiene el cronograma de obra en movimiento.</p>
      <p class="mt-6 text-lg font-semibold">El ROI de un servicio como el de AEREovista no está en las fotos o videos, sino en la capacidad de tomar decisiones más inteligentes, rápidas y seguras. Es una inversión que se recupera, con creces, a lo largo de la vida del proyecto.</p>
    `
  },
  {
    slug: "topografia-drones-vs-tradicional",
    title: "Topografía Tradicional vs. Fotogrametría con Drones",
    image: "https://images.pexels.com/photos/2249962/pexels-photo-2249962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Una comparativa directa de costos, tiempos y precisión entre los métodos topográficos convencionales y los relevamientos aéreos con tecnología drone.",
    date: "05 de Agosto, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">La topografía es el punto de partida de todo gran proyecto de construcción. Durante décadas, los métodos tradicionales con estaciones totales y GPS han sido el estándar. Sin embargo, la <strong>fotogrametría con drones</strong> ha llegado para revolucionar este campo, ofreciendo ventajas significativas en velocidad, seguridad y la riqueza de los datos obtenidos.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Análisis Comparativo: Velocidad, Costo y Seguridad</h2>
      <ul class="list-disc list-inside space-y-3 pl-5 text-lg">
        <li><strong>Velocidad de Captura:</strong> Un relevamiento topográfico de un terreno de 10 hectáreas que podría tomar varios días a un equipo en tierra, puede ser completado por un drone en <strong>menos de una hora de vuelo</strong>. Esto acelera drásticamente el inicio del proyecto.</li>
        <li><strong>Reducción de Costos:</strong> Al requerir menos horas-hombre en el campo y reducir el tiempo total del relevamiento, el costo asociado disminuye considerablemente. Además, se elimina la necesidad de acceder a zonas peligrosas o de difícil acceso.</li>
        <li><strong>Seguridad Operativa:</strong> La topografía con drones minimiza la exposición del personal a los riesgos del terreno (desniveles, maquinaria pesada, etc.). El piloto opera desde una zona segura en todo momento.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">La Riqueza de los Datos: Más que Solo Puntos</h2>
      <p class="text-lg leading-relaxed mb-4">Aquí radica la mayor diferencia. Un topógrafo tradicional entrega una serie de puntos con coordenadas. Un relevamiento con drone entrega eso y mucho más:</p>
      <p class="text-lg leading-relaxed mb-4">Con la fotogrametría, se obtiene una <strong>nube de millones de puntos</strong>, una ortofoto de ultra alta resolución y un modelo 3D del terreno. Esto no solo sirve para las curvas de nivel, sino que también proporciona un contexto visual completo para que los arquitectos e ingenieros puedan "caminar" digitalmente por el terreno antes de que se mueva la primera piedra.</p>
      <p class="mt-6 text-lg font-semibold">Si bien la topografía tradicional sigue siendo útil para ciertos trabajos de alta precisión, la fotogrametría con drones ofrece una solución más rápida, segura y rica en información para la gran mayoría de las necesidades de un proyecto de construcción moderno.</p>
    `
  },
  {
    slug: "5-claves-contratar-servicio-drones-profesional",
    title: "5 Claves para Contratar un Servicio de Drones Profesional",
    image: "https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "No todos los operadores de drones son iguales. Te damos una guía para elegir un socio tecnológico confiable que entienda las exigencias de la construcción.",
    date: "12 de Agosto, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">El mercado de servicios con drones ha crecido exponencialmente. Sin embargo, para un proyecto de construcción, no se puede contratar a cualquiera. Un error o la falta de profesionalismo pueden costar muy caro. Aquí te damos 5 claves para asegurarte de que estás contratando a un verdadero profesional.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Las 5 Preguntas que Debés Hacer</h2>
      <ol class="list-decimal list-inside space-y-3 pl-5 text-lg">
        <li><strong>¿Están registrados en ANAC y tienen seguro?</strong> Es la primera pregunta y la más importante. Un operador profesional debe estar inscripto en la ANAC y contar con un seguro de responsabilidad civil para su drone. Es innegociable.</li>
        <li><strong>¿Cuál es su experiencia específica en obras?</strong> Mostrame tu portfolio. No es lo mismo filmar un evento social que entender la dinámica y los riesgos de una obra en construcción. Pedí ver trabajos anteriores similares al tuyo.</li>
        <li><strong>¿Qué entregables técnicos ofrecen además de video?</strong> Un profesional te hablará de ortomosaicos, modelos 3D, nubes de puntos y cálculos de volúmenes. Si solo te ofrecen "videos 4K", probablemente no sean los especialistas que necesitás.</li>
        <li><strong>¿Cuál es su protocolo de seguridad en campo?</strong> Un piloto profesional te hablará de su checklist pre-vuelo, de cómo analiza el espacio aéreo, de su plan de emergencia y de cómo se coordina con el jefe de obra.</li>
        <li><strong>¿Cómo procesan y entregan los datos?</strong> Preguntá qué software utilizan y cómo te entregarán la información. Una empresa seria te ofrecerá una plataforma segura para la descarga y te hablará de la compatibilidad con tus programas de CAD o GIS.</li>
      </ol>
      <p class="mt-6 text-lg font-semibold">Elegir un proveedor de servicios aéreos es una decisión importante. En <strong>AEREovista</strong>, cumplimos con todos estos puntos y vamos más allá, posicionándonos como tu socio tecnológico para garantizar que la implementación de esta tecnología sea un éxito rotundo en tu proyecto.</p>
    `
  },
];
// -----------------------------------------------------------------------------


function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe o fue movido.",
    };
  }

  return {
    title: `${post.title} | AEREovista`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | AEREovista`,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 pt-40 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">{post.date}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mt-2">
            {post.title}
          </h1>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>
        
        <div
          className="prose lg:prose-xl max-w-none mx-auto text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="text-center mt-16">
          <Link href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform text-lg">
            &larr; Volver a todos los artículos
          </Link>
        </div>
      </div>
    </article>
  );
}
