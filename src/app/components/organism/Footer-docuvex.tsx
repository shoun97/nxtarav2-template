import React from "react";
import Image from "next/legacy/image";
import CustomSeparator from "@components/atoms/CustomSeparator";

const FooterDocuvex = () => {
  return (
    <footer className="flex flex-col bg-primary-1 text-white">
      {/* Imagen para móvil */}
      <div className="block md:hidden w-full px-[24px]">
        <Image
          src="/footerDocuvex-movile.svg"
          alt="footer móvil"
          layout="responsive"
          width={375}
          height={150}
          loading="lazy"
        />
      </div>

      {/* Imagen para escritorio */}
      <div className="hidden md:block w-full px-[136px]">
        <Image
          src="/footer-nxtara-line.svg"
          alt="footer escritorio"
          layout="responsive"
          width={1440}
          height={180}
          loading="lazy"
        />
      </div>

      {/* Contenido adicional del footer */}
      <div className="flex flex-col gap-10 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo u otra info */}
        </div>
        <CustomSeparator height="32px" />
      </div>
    </footer>
  );
};

export default FooterDocuvex;
