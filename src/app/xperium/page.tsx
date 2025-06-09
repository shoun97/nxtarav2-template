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
          <HeroCover
            logoSvg="/assets/logos/xperium-contrast.svg"
            subtitle="Más que un e-commerce: un portal que le da identidad a tu marca"
            backgroundImageUrl="/assets/xperium-bg.svg"
            viewPlansLabel="Planes"
            hireLabel="Empezar ahora"
            viewPlansHref="#planes"
            hireHref="#contacto"
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
            imageSrc="/assets/xperium/mujer-telefono-xperium.svg"
            imageAlt="xperium-telefono"
            title="Venta Simplificada"
            subtitle=""
            fondo="bg-gray-100"
            description={`
              Facilita  a tus clientes el  proceso de compra  con  interfaces modernas ,rápidas e intuitivas.
              `}
            imagePosition="left"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/xperium/zapatillas-xperium.svg"
            imageAlt="Innovación"
            title="Branding que impacta"
            subtitle=""
            fondo="bg-gray-100"
            description={`Creamos marcas memorables que tus clientes recordarán, construyendo una comunidad sólida en torno a tu negocio.`}
            imagePosition="right"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/xperium/ecommerce-xperium.svg"
            imageAlt="Innovación"
            title="Catálogo online y gestión eficiente"
            subtitle=""
            fondo="bg-gray-100"
            description={`Realiza cargas masivas de productos o servicios y optimiza fichas para una búsqueda rápida y sencilla.`}
            imagePosition="left"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/xperium/postventa-xperium.svg"
            imageAlt="Innovación"
            title="Postventa confiable"
            subtitle=""
            fondo="bg-gray-100"
            description={`Ofrecemos soporte confiable y asesoría profesional en cada etapa,brindando  experiencias memorables.`}
            imagePosition="left"
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
