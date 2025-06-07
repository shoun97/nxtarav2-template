import React from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import MainTitle from "@components/molecules/MainTitle";
import ServiceCard from "../molecules/ServiceCard";

const CompanySection = () => {
  return (
    <>
      <MainTitle
        title={"Herramientas que transforman la productividad"}
        details={
          <>
            <div className="pt-4" />
            <p>
              Creamos herramientas digitales a partir de <b>necesidades reales</b>,
              pensadas para optimizar tu
            </p>
            <div className="pt-4" />
            <p>
              operación, aumentar la rentabilidad y conectar con tus usuarios.
            </p>
          </>
        }
      />

      <CustomSeparator height="64px" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-0 pb-10">
        <ServiceCard
          imageUrl="/herramientas-digitales/docuvex.png"
          imageAlt="Logo de Docuvex"
          title="Gestión documental más rápida, integrada y accesible."
          description="Organiza, busca y accede a documentos empresariales desde cualquier dispositivo, optimizando tiempos y procesos."
        />

        <ServiceCard
          imageUrl="/herramientas-digitales/orvix.png"
          imageAlt="orvix"
          title="Compra y venta de oro con control total."
          description="Gestiona operaciones de manera segura, precisa y local, con reportes que validan cada movimiento."
        />

        <ServiceCard
          imageUrl="/herramientas-digitales/xperium.png"
          imageAlt="Xperium"
          title="E-commerce que fluye y conquista."
          description="Mejora la experiencia de compra online con una plataforma ágil, visual y centrada en el usuario."
        />
      </div>
    </>
  );
};

export default CompanySection;
