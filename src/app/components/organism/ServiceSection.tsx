import React from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import ServiceCard from "@components/molecules/ServiceCard";
import MainTitle from "@components/molecules/MainTitle";

const ServiceSection = () => {
  return (
    <div id={"service"} className="flex flex-col bg-animated ">
      <div className="degrade_card " style={{}}>

        <CustomSeparator height="32px" />

        <MainTitle
          title={"Nuestros Servicios"}
          details={
            <>
              <CustomSeparator height="16px" />
              <p>
                Te ofrecemos distintas formas de comprar o vender tus joyas,
                según lo que necesites.
              </p>
            </>
          }
        />
        <CustomSeparator height="32px" />
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-[16px] px-[16px] overflow-visible md:overflow-x-auto"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <ServiceCard
            imageUrl={"/card-1.png"}
            imageAlt={
              "imagen que hace referencia a la compra de oro con pacto de retroventa"
            }
            title={"Compraventa con Pacto de Retroventa"}
            description={
              "Recibe efectivo hoy y conserva el derecho de recompra durante un plazo fijo. Un servicio seguro, legal y con respaldo."
            }
          />

          <ServiceCard
            imageUrl={"/card-2.png"}
            imageAlt={
              "imagen que hace referencia a la compra inmediata de oro y joyas"
            }
            title={"Compra inmediata de oro y joyas"}
            description={
              "Valoramos tus joyas de oro, plata y otros metales preciosos de forma rápida, justa y transparente."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
