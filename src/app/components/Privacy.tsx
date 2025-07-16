// app/components/Privacy.tsx
export default function Privacy() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Política de Privacidad</h1>
        <p className="text-gray-700 mb-4">
          En AereoVista valoramos la privacidad de tus datos:
        </p>
        <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
          <li>Solo recolectamos los datos personales (nombre, email, mensaje) necesarios para contactarte y responder a tus consultas.</li>
          <li>No compartimos ni vendemos tu información a terceros.</li>
          <li>Usamos medidas de seguridad para proteger tus datos.</li>
          <li>Podés solicitar la eliminación de tu información escribiendo a <b>infoaereovista@gmail.com</b>.</li>
          <li>Podemos usar herramientas como Google Analytics para mejorar la web, pero no recibimos datos personales de estas herramientas.</li>
        </ul>
        <p className="text-gray-600 text-sm">
          Última actualización: Julio 2025
        </p>
      </div>
    </section>
  );
}
