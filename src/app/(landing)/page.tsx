"use client";
import SliderImage from "@/components/SliderImage";
import Image from "next/image";
import fondoImage from "./public/fondo.jpg";
import iconIndustria from "/icon_industria2.png";
import iconMineria from "/public/icon_mineria1.png";
import iconUrbano from "/public/icon_urbano1.png";
import iconVial from "/public/icon_vial1.png";
import { FloatingWhatsApp } from 'react-floating-whatsapp'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SliderImage />
      <section className="flex flex-col justify-center bg-[url('/fondo.jpg')] bg-cover bg-center h-auto bg-no-repeat w-full">
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
          <h2 className="font-bold text-4xl uppercase">Nuestros Servicios</h2>
          <p className="text-[#666]">
            Fabricación de tanques industriales de almacenamiento.
            <br />
            Mantenimiento industrial preventivo, correctivo, arenado y pintado
            epóxico.
          </p>
        </div>
        <div className="container flex justify-between w-auto gap-2">
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <Image
              className="w-full border-b-red-500 border-4 "
              src="/acero.jpg"
              alt="acero"
              height={200}
              width={200}
            />
            <h3 className="text-center">
              Tanques de Acero al Carbón e Inoxidable
            </h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <Image
              className="w-full border-b-red-500 border-4"
              src="/fibra.jpg"
              alt="fibra"
              height={200}
              width={200}
            />
            <h3 className="text-center">Tanques de Fibra de Vidrio</h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <Image
              className="w-full border-b-red-500 border-4"
              src="/residual.jpg"
              alt="residual"
              height={180}
              width={200}
            />
            <h3 className="text-center">
              Tanques para Tratamiento de Agua Residual
            </h3>
          </div>
          <div className="flex flex-col items-center w-1/4 space-y-4">
            <Image
              className="w-full border-b-red-500 border-4"
              src="/servicios.jpg"
              alt="servicios"
              height={200}
              width={200}
            />
            <h3 className="text-center">Más servicios</h3>
          </div>
        </div>
      </section>

      {/* SECCION SECTORES ESTRATEGICOS*/}
      <section className="px-24 py-12 bg-[#f2f2f2] w-full">
        <div className="text-center py-4">
          <h2 className="font-bold text-4xl">SECTORES ESTRATÉGICOS</h2>
          <p className="text-[#666]">
            Garantizamos soluciones eficientes y rápidas, sencillas y menos
            costosas.
            <br />
            Sin perder de vista algo tan necesario e indispensable como la
            calidad y respeto a la ecología.
          </p>
        </div>
        <div className="container flex justify-center w-auto gap-12">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/icon_industria2.png"
              width={180}
              height={180}
              alt="Industria"
            />
            <h3 className="text-center">Industria</h3>
          </div>
          <div className="flex flex-col items-center  space-y-4">
            <Image
              src="/icon_mineria1.png"
              width={180}
              height={180}
              alt="Minería"
            />
            <h3 className="text-center">Minería</h3>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/icon_urbano1.png"
              width={180}
              height={180}
              alt="Urbano"
            />
            <h3 className="text-center">Urbano</h3>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image src="/icon_vial1.png" width={180} height={180} alt="Víal" />
            <h3 className="text-center">Víal</h3>
          </div>
        </div>
      </section>

      {/* SECCION CONTACTO*/}
      <section className="w-full relative overflow-hidden" >
        <div className="text-center text-white bg-[url('/fondocontacto.jpg')] w-auto bg-no-repeat bg-cover">
          <div className="bg-[rgba(12,12,12,0.55)] w-full h-[400px] flex justify-center items-center flex-col gap-6">
            <h2 className="font-bold text-4xl">Cuéntenos su proyecto</h2>
            <p className="">
              Consulte con nosotros por la fabricación de tanques
              sedimentadores, clarificadores, aireadores, sistemas de flotación
              por oxígeno disuelto (D.A.F.), desnatadores, etc.
            </p>
            <a
            href="/contacto"
            className="border-white border-2 p-2 rounded-sm">
              Contactar
            </a>{" "}
          </div>
        </div>
      </section>



      <FloatingWhatsApp phoneNumber="951123345" accountName="Solinox Rpte." chatMessage="Hola :) , ¿qué servicio requieres?" statusMessage="Atendemos de 8am a 1pm"  />

    </main>
  );
}
