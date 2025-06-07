import React from "react";
import Image from "next/legacy/image";
import CustomSeparator from "@components/atoms/CustomSeparator";
import ContactFooterSection from "@components/organism/ContactFooterSection";

const phone = "56995098115";
const message = encodeURIComponent("Hola, quiero más información.");

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary-1 py-[32px] text-white">
      {/* Mobile layout */}
      <div className="flex flex-col items-center gap-6 px-[16px] text-center lg:hidden">
        <Image
          src="/icon-nxtara.svg"
          width={104}
          height={80}
          alt="nxtara logo"
          loading="lazy"
        />

        <ContactFooterSection />

        <small className="text-primary-3 text-xs">
          © 2025 NxTara. Todos los derechos reservados.
        </small>

        <CustomSeparator height="64px" />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col gap-10 px-8 max-w-7xl mx-auto">
        {/* Top - logo + navegación */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo */}
          <div>
            <Image
              src="/nxtara.svg"
              width={400}
              height={200}
              alt="Logo Nxtara"
              loading="lazy"
            />
          </div>

          {/* Navegación rápida */}
          <div className="flex flex-col gap-2 text-white">
            <h4 className="font-semibold mb-2">Navegación rápida</h4>
            <a href="#inicio" className="hover:underline">
              Inicio
            </a>
            <a href="#servicios" className="hover:underline">
              Nuestros Servicios
            </a>
            <a href="#calidad" className="hover:underline">
              Política de calidad
            </a>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ¿Hablamos?
            </a>
          </div>
        </div>

        <CustomSeparator height="32px" />

        <ContactFooterSection />

        <div className="text-primary-3 text-sm text-center">
          © 2025 NxTara. Todos los derechos reservados.
        </div>

        <CustomSeparator height="64px" />
      </div>
    </footer>
  );
};

export default Footer;
