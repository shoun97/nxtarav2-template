"use client";
import { JSX } from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import HeroCover from "@/components/molecules/HeroCover";

import Header from "@components/organism/Header";
import InnovationSectionOrganism from "@components/organism/InnovationSectionOrganism";
import InfoWithImage from "@/components/organism/InfoWithImage";

import ScrollFade from "@components/atoms/ScrollFade";


const Home = (): JSX.Element => {
  return (
    <>
      <Header transparent />
      <main
        className="flex flex-col overflow-y-hidden"
        style={{ overflowX: "hidden" }}
      >
        <ScrollFade delay={0.1}>
          <HeroCover
            logoSvg="/assets/logos/docuvex-contrast.svg"
            subtitle="El gestor documental que organiza, protege y conecta a tu equipo sin complicaciones."
            backgroundImageUrl="/assets/docuvex-bg.svg"
            viewPlansLabel="Beneficios"
            hireLabel="Contratar"
            viewPlansHref="#planes"
            hireHref="#contacto"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InnovationSectionOrganism
            title="Descubre cómo Docuvex transforma tu gestión documental"
            subtitle={`Estos son los 4 beneficios clave que harán tu trabajo más ágil, seguro y colaborativo.`}
            features={[
              {
                iconSrc: "/assets/icons/documentos.svg",
                title: "Agilidad Documental Sin Complicaciones",
              },
              {
                iconSrc: "/assets/icons/checklist.svg",
                title: "Trazabilidad Total en Cada Archivo",
              },
              {
                iconSrc: "/assets/icons/seguridad.svg",
                title: "Seguridad y Privacidad",
              },
              {
                iconSrc: "/assets/icons/trabajoequipo.svg",
                title: "Trabajo en Equipo Sin Barreras",
              },
            ]}
          />

        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/docuvex/chica-docuvex.svg"
            imageAlt="chica-docuvex"
            title="Agilidad documental sin complicaciones"
            subtitle=""
            fondo="bg-gray-100"
            description={`
              Optimiza el flujo de trabajo y accede a tus documentos en segundos, gracias a un sistema diseñado para ser rápido, eficiente y fácil de usar.
              `}
            imagePosition="left"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/docuvex/team-grafico-docuvex.svg"
            imageAlt="Innovación"
            title="Trazabilidad total en cada archivo"
            subtitle=""
            fondo="bg-gray-100"
            description={`Sigue cada cambio, movimiento y actualización de tus documentos con un sistema que registra cada detalle y mantiene el control total.`}
            imagePosition="right"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/docuvex/seguridad-docuvex.svg"
            imageAlt="Innovación"
            title="Seguridad y privacidad"
            subtitle=""
            fondo="bg-gray-100"
            description={`Protege tus archivos más sensibles con encriptación avanzada y acceso seguro, garantizando que solo las personas autorizadas puedan ingresar.`}
            imagePosition="left"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/docuvex/trabajo-equipo-docuvex.svg"
            imageAlt="Innovación"
            title="Trabajo en equipo sin barreras"
            subtitle=""
            fondo="bg-gray-100"
            description={`Colabora con tu equipo desde cualquier lugar, compartiendo documentos en tiempo real sin perder el control ni la seguridad.`}
            imagePosition="right"
          />
        </ScrollFade>
      </main>
    </>
  );
};

export default Home;
