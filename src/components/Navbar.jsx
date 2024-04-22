"use client";

import Link from "next/link";
// import Nosotros from '../nosotros/page'

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-14" src="/logo.png" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
              >
                Inicio
              </Link>
              <Link href="/nosotros">
                <div className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300">
                  Nosotros
                </div>
              </Link>
              <Link
                href="/certificaciones"
                className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
              >
                Certificaciones
              </Link>

              <div className="relative">
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  Servicios
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link
                      href="/tanques-de-acero"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tanques de Acero
                    </Link>
                    <Link
                      href="/tanques-de-fibra-de-vidrio"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tanques de Fibra de Vidrio
                    </Link>
                    <Link
                      href="/tanques-para-tratamiento-de-agua-residual"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tanques para Tratamiento de Agua Residual
                    </Link>
                    <Link
                      href="/mas-servicios"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Más Servicios
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contacto"
                className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#e01f1f] hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="ml-4 flex items-center md:ml-6">
          <Link
            href="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
          >
            Inicio
          </Link>
          <Link href="/nosotros">
            <div className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300">
              Nosotros
            </div>
          </Link>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
          >
            Certificaciones
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
          >
            Servicios
          </a>
          <Link
            href="/contacto"
            className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
