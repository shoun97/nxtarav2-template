import React from "react";
import Image from "next/image";
import CustomSeparator from "@components/atoms/CustomSeparator";
import ButtonGroups from "@components/molecules/ButtonGroups";

const MainCover = () => {

  return (
    <div
      id="Home"
      className="relative w-full h-screen overflow-hidden flex items-start justify-start text-white"
    >
      {/* Fondo */}
      <Image
        src="/assets/fondo-home.svg"
        alt="Fondo"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />

      {/* Contenido principal */}
      {/* Contenido principal estilizado */}

      <div className="z-20 text-center px-4 max-w-4xl mx-auto" style={{
        marginTop: "125px",
      }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "#F5F5F5",
            fontSize: 40,
            fontWeight: 500,
            wordWrap: "break-word",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Soluciones digitales que conectan y transforman.
        </div>

        <div
          style={{
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            color: "#F5F5F5",
            fontSize: 24,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            wordWrap: "break-word",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            marginTop: "16px",
          }}
        >
          Estamos contigo para ayudarte a crecer, destacar y dejar huella.
        </div>
      </div>
    </div>
  );
};

export default MainCover;
