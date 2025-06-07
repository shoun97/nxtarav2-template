import React from "react";
import MainTitle from "@components/molecules/MainTitle";
import ServiceCard from "../molecules/ServiceCard";

const BrandsSection = () => {
  return (
    <>
      <MainTitle title="Todo lo que tu empresa necesita para operar sin pausas" />


      {/* Tarjetas de servicios */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-0 pb-10">
        <ServiceCard
          imageUrl="/herramientas-digitales/insumex.png"
          imageAlt="orvix"
          title="Venta de Insumos Empresariales"
          description="Todo lo esencial, justo a tiempo. Proveemos insumos clave para que tu empresa siga operando sin pausas."
        />

        <ServiceCard
          imageUrl="/herramientas-digitales/solvix.png"
          imageAlt="Xperium"
          title="Soporte Técnico Eficaz."
          description="Soluciones rápidas cuando más las necesitas. Te acompañamos con asistencia técnica ágil, confiable y lista para resolver cualquier incidente operativo."
        />
      </div>
    </>
  );
};

export default BrandsSection;
