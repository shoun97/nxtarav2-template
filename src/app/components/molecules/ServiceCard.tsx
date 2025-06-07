import React from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageUrl, imageAlt, title, description }: Props) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        width: "288px",
        minHeight: "380px",
        maxHeight: "380px",
        padding: "20px 14px 16px 14px",
        borderRadius: "32px",
        background: "#FFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Imagen/logo */}
      <div
        style={{
          width: "100%",
          maxWidth: "260px",
          height: "160px",
          position: "relative",
          marginBottom: "16px",
        }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>

      {/* Contenido textual */}
      <div style={{ width: "100%", maxWidth: "260px" }}>
        <p
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "'Futura URW Extra Bold', sans-serif",
            fontSize: "14px",
            lineHeight: "143%",
            letterSpacing: "0.17px",
            fontWeight: 400,
            textAlign: "justify",
            marginBottom: "8px",
          }}
        >
          {title}
        </p>

        <p
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "'Futura BK', sans-serif",
            fontSize: "14px",
            lineHeight: "143%",
            letterSpacing: "0.17px",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
