import SliderImage from "./components/SliderImage";
import fondoImage from "./public/fondo.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SliderImage />
      <section className="container flex flex-col justify-center bg-[url('/fondo.jpg')] bg-cover bg-center h-auto bg-no-repeat">
        <div className="w-1/2 pl-24">
          <h2 className="text-4xl py-12 ">
            Soluciones Técnicas Industriales, Mineras, Urbanas y Viales
          </h2>
          <p className="text-xl py-6 text-[#666]">
            SOLINOX es una empresa con amplia experiencia en la fabricación de
            todo tipo de{" "}
            <span className="font-bold">
              Tanques en acero al carbón, acero Inoxidable y fibra de Vidrio.{" "}
            </span>
            <br />
            <br />
            Trabajamos con un grupo de profesionales entre ellos Ingenieros,
            técnicos y demás colaboradores, con el fin de entregar productos que
            cumplan con los estándares y normas de calidad.
            <br />
            <br />
            Nos capacitamos con instructores certificados de la American Society
            of Mechanical Engineers (ASME).
          </p>
        </div>
      </section>

      {/* SECCION SERVICIOS*/}
      <section className="px-24 py-12">
        <div className="text-center py-4">
          <h2 className="font-bold text-4xl">Nuestros Servicios</h2>
          <p className="text-[#666]">
            Fabricación de tanques industriales de almacenamiento.
            <br />
            Mantenimiento industrial preventivo, correctivo, arenado y pintado
            epóxico.
          </p>
        </div>
        <div className="container flex justify-between w-auto gap-2">
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <img
              className="w-full border-b-red-500 border-4 "
              src="https://placehold.co/200x200"
              alt=""
            />
            <h3 className="text-center">
              Tanques de Acero al Carbón e Inoxidable
            </h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <img
              className="w-full border-b-red-500 border-4"
              src="https://placehold.co/200x200"
              alt=""
            />
            <h3 className="text-center">Tanques de Fibra de Vidrio</h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <img
              className="w-full border-b-red-500 border-4"
              src="https://placehold.co/200x200"
              alt=""
            />
            <h3 className="text-center">
              Tanques para Tratamiento de Agua Residual
            </h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <img
              className="w-full border-b-red-500 border-4"
              src="https://placehold.co/200x200"
              alt=""
            />
            <h3 className="text-center">Más servicios</h3>
          </div>
        </div>
      </section>

      {/* SECCION SECTORES ESTRATEGIOS*/}

      {/* SECCION CONTACTO*/}
    </main>
  );
}
