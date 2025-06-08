import React from "react";
import Image from "next/image";

interface MainCoverProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
}

const MainCover: React.FC<MainCoverProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
}) => {
  return (
    <div
      id="Home"
      className="relative w-full h-screen overflow-hidden flex items-start justify-start text-white"
    >
      {/* Fondo parametrizado */}
      <Image
        src={backgroundImageUrl}
        alt="Fondo"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />

      {/* Contenido principal estilizado */}
      <div
        className="z-20 text-center px-4 max-w-4xl mx-auto"
        style={{
          marginTop: "125px",
        }}
      >
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
          {title}
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
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default MainCover;
