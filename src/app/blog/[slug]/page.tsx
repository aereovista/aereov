// src/app/blog/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Base de datos de artículos (simplificada, agregá la que tengas)
const blogPosts = [
  {
    slug: "optimizacion-obra-drones-fotogrametria-2025",
    title: "Cómo la Fotogrametría con Drones Optimiza tu Obra en 2025",
    image: "/image/fotometria-2.jpg",
    excerpt: "Descubre cómo los modelos 3D y los datos topográficos exactos te permiten tomar decisiones informadas, reducir costos y cumplir plazos en Buenos Aires.",
    date: "14 de Julio, 2025",
    content: `
      <p class="text-lg leading-relaxed mb-4">En la industria de la construcción en Argentina, la eficiencia y la precisión no son un lujo, son la base de la rentabilidad...</p>
      <!-- Continúa el contenido -->
    `
  },
  // ... Agregá acá los demás posts que tengas
];

function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
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
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform text-lg"
          >
            &larr; Volver a todos los artículos
          </Link>
        </div>
      </div>
    </article>
  );
}
