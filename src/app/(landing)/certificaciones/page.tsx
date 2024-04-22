function Certificaciones() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-800 text-center">
        Certificaciones y Premios
      </h2>
      <p className="text-gray-800">
        En Solinox, nos enorgullecemos de contar con los más altos estándares de
        calidad y seguridad en la construcción de tanques de acero. Nuestras
        certificaciones y premios son un testimonio de nuestro compromiso con la
        excelencia.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-800">
            Certificación ISO 9001:2015
          </h3>
          <p className="text-gray-600">
            Demuestra nuestro compromiso con la gestión de la calidad y la
            mejora continua.
          </p>
          <img
            src="/iso90001.png"
            alt="Certificado ISO 9001"
            className="mx-auto mt-4 w-32"
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-800">
            Premio a la Excelencia Empresarial
          </h3>
          <p className="text-gray-600">
            Reconocimiento a nuestro liderazgo y desempeño en el sector.
          </p>
          <img
            src="/premioexcelencia.avif"
            alt="Premio a la Excelencia Empresarial"
            className="mx-auto mt-4 w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificaciones;
