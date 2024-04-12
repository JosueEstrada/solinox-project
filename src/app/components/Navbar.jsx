"use client";

import Link from 'next/link';
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
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
              >
                Inicio 
              </a>
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
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Nosotros
          </a>
          <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-[rgba(0,0,0,0.6)] hover:text-gray-300"
              >
                Certificaciones
              </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Servicios
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
