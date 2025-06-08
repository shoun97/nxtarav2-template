"use client";
import { JSX } from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import HeroCover from "@/components/molecules/HeroCover";

import Header from "@components/organism/Header";
import InnovationSectionOrganism from "@components/organism/InnovationSectionOrganism";
import InfoWithImage from "@/components/organism/InfoWithImage";

import ScrollFade from "@components/atoms/ScrollFade";
import Footer from "@/components/organism/Footer";


const solutions = [
  { icon: "/icons/xperium.svg", alt: "Xperium", name: "Xperium", description: "Tienda online para tu negocio", href: "#xperium" },
  { icon: "/icons/orvix.svg", alt: "Orvix", name: "Orvix", description: "Gestión total para empresas", href: "#orvix" },
  { icon: "/icons/docuvex.svg", alt: "Docuvex", name: "Docuvex", description: "Gestor documental empresarial", href: "#docuvex" },
  { icon: "/icons/insumex.svg", alt: "Insumex", name: "Insumex", description: "Insumos de oficina empresariales", href: "#insumex" },
  { icon: "/icons/solvix.svg", alt: "Solvix", name: "Solvix", description: "Soluciones informáticas para empresas", href: "#solvix" },
];

const aboutUs = [
  { icon: "/icons/star.svg", alt: "Identidad", text: "Nuestra identidad", href: "#identidad" },
  { icon: "/icons/help.svg", alt: "Contáctanos", text: "Contactanos", href: "#contacto" },
  { icon: "/icons/info.svg", alt: "Política", text: "Política de calidad", href: "#politica" },
];

const partners = [
  { logo: "/icons/ilis.svg", alt: "Ilis Seguridad", name: "Ilis seguridad", href: "#ilis" },
  { logo: "/icons/farallones.svg", alt: "Farallones", name: "Farallones Holding", href: "#farallones" },
];


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

        <Footer
          solutions={solutions}
          aboutUs={aboutUs}
          partners={partners}
          logo="/nxtara.svg"
          altLogo="Nxtara Logo"
        />;
      </main>
    </>
  );
};

export default Home;
