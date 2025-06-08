import React from "react";
import Image from "next/image";

interface IconCardAtomProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description?: string; // no usada ahora, pero sigue disponible
}

const IconCardAtom: React.FC<IconCardAtomProps> = ({
  iconSrc,
  iconAlt = "Ícono",
  title,
}) => {
  return (
    <div
      className="flex flex-col  rounded-[24px] shadow-md"
      style={{
        backgroundColor: "#F3F3F3",
        padding: "13px 0px 59px 11px",
        boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.25)",
        width: "260px",
      }}
    >
      {/* Icono */}
      <div
        style={{
          width: "54px",
          height: "54px",
        }}
      >
        <Image src={iconSrc} alt={iconAlt} width={54} height={54} />
      </div>

      {/* Título */}
      <div
        className="flex flex-col justify-center self-stretch text-center"
        style={{
          color: "#222",
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default IconCardAtom;
