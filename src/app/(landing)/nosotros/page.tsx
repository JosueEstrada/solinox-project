export default function Nosotros() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container flex flex-col lg:flex-row justify-center items-center bg-no-repeat bg-cover bg-center h-auto w-full">
        <div className="lg:w-1/2 p-8">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-800 text-center">
            Sobre Nosotros
          </h2>
          <p className="text-l py-6 text-[#666]">
            SOLINOX <br />
            <br />
            Somos una empresa que aporta ingeniería y técnicas innovadoras para
            la reparación y mantenimiento industrial, al mismo tiempo
            desarrollamos líneas constructivas mediante las normas vigentes y de
            calidad para elementos de conducción, impulsión o almacenamiento
            húmedos o secos. Realizamos el desarrollo de proyectos parciales o
            llave en mano en cuanto a montajes industriales, estructuras soporte
            y seguridad para las distintas actividades mineras, soluciones para
            el manejo de elementos de uso vial tales como maquinarias de
            auxilio, restricción de paso, apertura de vías, señalizaciones
            viales, naves de almacenes y plantas de tratamiento del agua urbanas
            o equipos parciales como clarificadores, aireadores, reactores,
            sistemas D.A.F. Fabricación, reparación y mantenimiento de
            generadores de vapor. Los mecanismos que usamos para lograr los
            objetivos de nuestra empresa en cuanto a fabricaciones y
            reparaciones se equilibran con el sostenimiento ecológico y búsqueda
            de preservación del medioambiente tanto en el desarrollo de
            actividades así como en el empleo de consumibles, solventes y
            componentes.
          </p>
          <p className="text-l py-6 text-[#666]">
            NUESTRO COMPROMISO <br />
            <br />
            Nuestro compromiso es con nosotros mismos en virtud de mejorar cada
            día a la vanguardia en el uso de las últimas tecnologías haciéndole
            llegar a nuestros clientes y amigos la satisfacción de la obra
            cumplida y superada en espectativa y economía. Entregamos a su
            disposición lo mejor y de primera de un equipo de trabajo como es
            SOLINOX comprometidos de vocación al equilibrio entre las
            actividades productivas y la vida del planeta.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img src="/nosotros1.jpg" alt="Nosotros" className="w-full" />
          <img src="/nosotros2.jpg" alt="Nosotros" className="w-full" />
        </div>
      </section>

      <section className="container flex flex-col lg:flex-row justify-center items-center bg-no-repeat bg-cover bg-center h-auto w-full">
        <div className="lg:w-1/50">
          <img
            src="/personal-solinox2-min.jpg"
            alt="Personal Solinox"
            className="border border-gray-900"
          />
        </div>
      </section>
    </main>
  );
}
