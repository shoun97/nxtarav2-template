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
import Footer from "./components/organism/Footer";
import InfoWithImage from "./components/organism/InfoWithImage";

const solutions = [
  { icon: "/assets/icons/xperium.svg", alt: "Xperium", name: "Xperium", description: "Tienda online para tu negocio", href: "#xperium" },
  { icon: "/assets/icons/orvix.svg", alt: "Orvix", name: "Orvix", description: "Gestión total para empresas", href: "#orvix" },
  { icon: "/assets/icons/docuvex.svg", alt: "Docuvex", name: "Docuvex", description: "Gestor documental empresarial", href: "#docuvex" },
  { icon: "/assets/icons/insumex.svg", alt: "Insumex", name: "Insumex", description: "Insumos de oficina empresariales", href: "#insumex" },
  { icon: "/assets/icons/solvix.svg", alt: "Solvix", name: "Solvix", description: "Soluciones informáticas para empresas", href: "#solvix" },
];

const aboutUs = [
  { icon: "/assets/icons/star.svg", alt: "Identidad", text: "Nuestra identidad", href: "#identidad" },
  { icon: "/assets/icons/help.svg", alt: "Contáctanos", text: "Contactanos", href: "#contacto" },
  { icon: "/assets/icons/info.svg", alt: "Política", text: "Política de calidad", href: "#politica" },
];

const partners = [
  { logo: "/assets/icons/ilis.svg", alt: "Ilis Seguridad", name: "Ilis seguridad", href: "#ilis" },
  { logo: "/assets/icons/farallones.svg", alt: "Farallones", name: "Farallones Holding", href: "#farallones" },
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
          <MainCover
            title="Soluciones digitales que conectan y transforman."
            subtitle="Estamos contigo para ayudarte a crecer, destacar y dejar huella."
            backgroundImageUrl="/assets/fondo-home.svg"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InnovationSectionOrganism
            title="Una tienda online con beneficios que marcan la diferencia"
            features={[
              {
                iconSrc: "/assets/icons/venta.svg",
                title: "1. Venta Simplificada",
              },
              {
                iconSrc: "/assets/icons/branding.svg",
                title: "2. Branding que Impacta",
              },
              {
                iconSrc: "/assets/icons/catalogo.svg",
                title: "3. Catálogo Online y Gestión Eficiente",
              },
              {
                iconSrc: "/assets/icons/postventa.svg",
                title: "4. Postventa Confiable",
              },
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
