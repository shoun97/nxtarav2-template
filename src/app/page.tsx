"use client";
import { JSX } from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import MainCover from "@components/organism/MainCover";
import Header from "@components/organism/Header";
import InnovationSectionOrganism from "@components/organism/InnovationSectionOrganism";

/**
 * Home
 *
 * Componente principal de la página de inicio.
 * Incluye todos los componentes principales de la página.
 *
 * @returns {JSX.Element}
 */
import ScrollFade from "@components/atoms/ScrollFade";
import InfoWithImage from "@components/organism/InfoWithImage";


const Home = (): JSX.Element => {
  return (
    <>
      <Header transparent />
      <main
        className="flex flex-col overflow-y-hidden"
        style={{ overflowX: "hidden" }}
      >
        <ScrollFade delay={0.1}>
          <MainCover
            title="Soluciones digitales que conectan y transforman."
            subtitle="Estamos contigo para ayudarte a crecer, destacar y dejar huella."
            backgroundImageUrl="/assets/fondo-home.svg"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InnovationSectionOrganism
            title="Una tienda online con beneficios que marcan la diferencia"
            subtitle="Cada negocio es único. Nuestras soluciones digitales se adaptan a tus necesidades, optimizan procesos y mejoran la conexión con tu audiencia"
            features={[
              {
                iconSrc: "/assets/icons/touch.svg",
                title: "Interacción intuitiva",
                description: "Nuestra tienda online te permite vender de manera eficiente y atractiva.",
              },
              {
                iconSrc: "/assets/icons/handshake.svg",
                title: "Postventa confiable",
                description: "Ofrecemos atención inmediata y apoyo constante, generando confianza y fidelidad en tus clientes.",
              },
              {
                iconSrc: "/assets/icons/ecualizadores.svg",
                title: "Escalabilidad con tu negocio",
                description: "Nuestras soluciones crecen contigo, adaptándose a tus necesidades para facilitar la expansión.",
              }
            ]}
          />

        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/infoImage-home-izquierda.svg"
            imageAlt="Innovación"
            title="Innovación que camina contigo"
            subtitle=""
            fondo="bg-gray-100"
            description={`En nuestra start-up, no solo ofrecemos soluciones: las creamos contigo.
            Cada paso que damos está inspirado en tus **desafíos reales**, para darte herramientas innovadoras que se sienten humanas, cercanas y efectivas.`}
            imagePosition="left"
          />
        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/infoImage-home-derecha.svg"
            imageAlt="Innovación"
            title="Tecnología intuitiva sin complicaciones"
            subtitle=""
            description={`La innovación no tiene que ser complicada. 
              Nuestras soluciones digitales son tan intuitivas y fáciles de usar que te permiten enfocarte en lo que realmente importa: hacer crecer tu negocio.`}
            imagePosition="right"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <MainCover
            title="Confianza más allá de la entrega"
            subtitle="En NXTARA no desaparecemos después de la entrega. Nuestro servicio postventa es parte esencial del valor: estamos contigo siempre, resolviendo dudas y adaptando mejoras que potencian tu negocio."
            backgroundImageUrl="/assets/fondo-prefooter-home.svg"
          />
        </ScrollFade>



      </main>
    </>
  );
};

export default Home;
