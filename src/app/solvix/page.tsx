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
            logoSvg="/assets/logos/solvix-contrast.svg"
            subtitle="Soluciones informáticas que conectan y resuelven"
            backgroundImageUrl="/assets/solvix-bg.svg"
            viewPlansLabel="Beneficios"
            hireLabel="Contratar"
            viewPlansHref="#planes"
            hireHref="#contacto"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InnovationSectionOrganism
            title="Los 4 pilares que mantienen tu empresa conectada y segura"
            subtitle={`En Solvix combinamos experiencia técnica, soluciones adaptadas, conexiones confiables y respuesta inmediata.`}
            features={[
              {
                iconSrc: "/assets/icons/pregunta.svg",
                title: "Soporte Técnico Especializado",
              },
              {
                iconSrc: "/assets/icons/rutas.svg",
                title: "Redes que Conectan Sin Fallas",
              },
              {
                iconSrc: "/assets/icons/network.svg",
                title: "Tecnología Adaptada a Tu Negocio",
              },
              {
                iconSrc: "/assets/icons/buscadorguard.svg",
                title: "Prevención y Respuesta Rápida",
              },
            ]}
          />

        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/solvix/soporte-solvix.svg"
            imageAlt="chica-solvix"
            title="Soporte técnico especializado"
            subtitle=""
            fondo="bg-gray-100"
            description={`
              Contamos con un equipo experto en resolver fallos, prevenir errores y mantener operativa tu infraestructura tecnológica. Desde software hasta hardware, aseguramos un entorno sin interrupciones.
              `}
            imagePosition="left"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/solvix/redes-solvix.svg"
            imageAlt="redes-solvix"
            title="Redes que conectan sin fallas"
            subtitle=""
            fondo="bg-gray-100"
            description={`Instalamos y mantenemos redes cableadas y estructuradas para garantizar conexiones estables, rápidas y seguras dentro de tu empresa.`}
            imagePosition="right"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/solvix/network-solvix.svg"
            imageAlt="network-solvix"
            title="Tecnología adaptada a tu negocio"
            subtitle=""
            fondo="bg-gray-100"
            description={`Integramos soluciones informáticas que se ajustan a la realidad operativa de tu empresa, sin importar si los sistemas son propios o de terceros.`}
            imagePosition="left"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/solvix/prevencion-solvix.svg"
            imageAlt="prevencion-solvix"
            title="Prevención y respuesta rápida"
            subtitle=""
            fondo="bg-gray-100"
            description={`Monitorizamos, diagnosticamos y resolvemos problemas antes de que afecten tu operación. Nuestro enfoque es preventivo, pero siempre estamos listos para actuar cuando más lo necesitas.`}
            imagePosition="right"
          />
        </ScrollFade>


      </main>
    </>
  );
};

export default Home;
