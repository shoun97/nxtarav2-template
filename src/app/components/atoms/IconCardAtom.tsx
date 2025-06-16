import React from "react";
import Image from "next/image";

interface IconCardAtomProps {
  iconSrc: string;
  iconAlt?: string;
  title?: string;
  description?: string;
}

const IconCardAtom: React.FC<IconCardAtomProps> = ({
  iconSrc,
  iconAlt = "Ícono",
  title,
  description,
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

      {/* Título */}
      <div
        className="flex  justify-center align-center self-stretch text-center"
        style={{
          color: "#222",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            width: "54px",
            height: "54px",
          }}
        >
          <Image src={iconSrc} alt={iconAlt} width={54} height={54} />
        </div>
        {title}
      </div>
      {/* Descripción */}
      <div>
        <div
          className="flex flex-col-reverse justify-center self-stretch text-center"
          style={{
            color: "#222",
            fontSize: "14px",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default IconCardAtom;
