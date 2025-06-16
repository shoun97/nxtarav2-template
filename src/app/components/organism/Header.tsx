import React from "react";
import CustomLogo from "@components/atoms/CustomLogo";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  return (
    <div
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 flex items-center justify-between px-6 md:px-12 ${transparent ? "" : "bg-primary-1 shadow-lg"
        }`}
      style={
        transparent
          ? {
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)",
            backdropFilter: "blur(8px)",
          }
          : {}
      }
    >
      {/* Logo izquierdo */}
      <CustomLogo imageUrl="/nxtara.svg" imageAlt="Nxtara Logo" />

      {/* Navegación derecha */}
      <div className="flex items-center gap-4 text-white font-medium text-sm md:text-base">
        <Link href="/" className="hover:underline transition">
          Inicio
        </Link>
        <Link href="/identidad" className="hover:underline transition">
          Nuestra identidad
        </Link>

        <button
          className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition"
        >
          <Link href="/soluciones" className="hover:underline transition">
            Soluciones digitales
          </Link>
        </button>

        {/* Botón WhatsApp */}
        <button
          onClick={() =>
            window.open(
              "https://wa.me/56995098115?text=¡Hola! Quiero saber más 😊",
              "_blank"
            )
          }
          className="ml-2 rounded-full p-2 bg-white/10 hover:bg-white/20 transition text-white"
        >
          <Image src="/assets/icons/wsp-icon.svg" alt="WhatsApp" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
