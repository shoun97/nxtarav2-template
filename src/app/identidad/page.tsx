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
            logoSvg="/assets/logos/orvix-contrast.svg"
            subtitle="La solución Integral que optimiza tu negocio"
            backgroundImageUrl="/assets/orvix-bg.svg"
            viewPlansLabel="Beneficios"
            hireLabel="Contratar"
            viewPlansHref="#planes"
            hireHref="#contacto"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InnovationSectionOrganism
            title="Descubre los beneficios que te harán crecer"
            subtitle={`Impulsa tu negocio con Orvix: Una plataforma centralizada con +15 módulos que automatizan inventarios, ventas y facturación. Optimiza recursos, toma mejores decisiones y gana ventaja competitiva con estos 6 beneficios clave.`}
            features={[
              {
                iconSrc: "/assets/icons/documentos.svg",
                title: "1. Control centralizado de inventarios y productos",
              },
              {
                iconSrc: "/assets/icons/checklist.svg",
                title: "2. Informes detallados para decisiones estratégicas",
              },
              {
                iconSrc: "/assets/icons/seguridad.svg",
                title: "3. Facturación electrónica integrada y automatizada",
              },
              {
                iconSrc: "/assets/icons/trabajoequipo.svg",
                title: "4. Gestión eficiente de clientes y sucursales",
              },
              {
                iconSrc: "/assets/icons/trabajoequipo.svg",
                title:
                  "5. Automatización y optimización de la operación comercial",
              },
              {
                iconSrc: "/assets/icons/trabajoequipo.svg",
                title: "6. Soporte técnico especializado y mejoras continuas",
              },
            ]}
          />
        </ScrollFade>
        <CustomSeparator height="32px" />
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/chica-erp.svg"
            imageAlt="chica-erp"
            title="Control centralizado de inventarios y productos"
            subtitle=""
            fondo="bg-gray-100"
            description={`
                Gestiona todos tus productos y existencias en un solo lugar, reduciendo costos, optimizando el flujo de inventario y asegurando que nunca te quedes sin stock
              `}
            imagePosition="left"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/asesor.svg"
            imageAlt="asesor"
            title="Informes detallados para decisiones estratégicas"
            subtitle=""
            fondo="bg-gray-100"
            description={`Obtén informes claros de ventas y datos históricos para tomar decisiones estratégicas que impulsen el crecimiento de tu negocio.`}
            imagePosition="right"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/documento-holograma.svg"
            imageAlt="documento-holograma"
            title="Facturación electrónica integrada y automatizada"
            subtitle=""
            fondo="bg-gray-100"
            description={`Agiliza tu proceso de ventas con la facturación electrónica automática, cumpliendo normativas y mejorando la eficiencia operativa de tu negocio.`}
            imagePosition="left"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/operario.svg"
            imageAlt="Operario"
            title="Gestión eficiente de clientes y sucursales"
            subtitle=""
            fondo="bg-gray-100"
            description={`Coordina todas tus sucursales y ofrece un servicio personalizado a cada cliente desde una plataforma unificada, mejorando la eficiencia operativa y la satisfacción del cliente.`}
            imagePosition="right"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/operaria.svg"
            imageAlt="Operario"
            title="Automatización y optimización de la operación comercial"
            subtitle=""
            fondo="bg-gray-100"
            description={`Optimiza todas tus operaciones comerciales con procesos automáticos que te permiten enfocarte en lo que realmente importa: hacer crecer tu negocio.`}
            imagePosition="left"
          />
        </ScrollFade>
        <ScrollFade delay={0.5}>
          <InfoWithImage
            imageSrc="/assets/orvix/soporte.svg"
            imageAlt="soporte"
            title="Soporte técnico especializado y mejoras continuas"
            subtitle=""
            fondo="bg-gray-100"
            description={`Siempre tendrás a tu disposición un equipo de soporte técnico especializado que te garantiza el máximo rendimiento de orvix, además de mejoras continuas sin complicaciones.`}
            imagePosition="right"
          />
        </ScrollFade>
      </main>
    </>
  );
};

export default Home;
