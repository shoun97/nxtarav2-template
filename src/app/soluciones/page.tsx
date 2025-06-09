"use client";
import { JSX } from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import MainCover from "@components/organism/MainCover";
import Header from "@components/organism/Header";
import BusinessSolutionsSection from "@components/organism/BusinessSolutionsSection";
import ImageTextCTA from "@/components/molecules/ImageTextCTA";

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
          <MainCover
            title="Descubre todo lo que tu negocio necesita."
            subtitle="Explora nuestras soluciones digitales, insumos y soporte diseñados para hacer crecer tu empresa con innovación y calidad."
            backgroundImageUrl="/assets/soluciones/fondo-home.svg"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <BusinessSolutionsSection />
        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <ImageTextCTA
            imageSrc="/assets/soluciones/pareja-celular.svg"
            titleIconSrc="/assets/logos/xperium.svg"
            description="Transforma tu tienda online con una experiencia de compra intuitiva, atractiva y diseñada para proyectar tu marca al máximo. Gestiona inventario y ventas de forma práctica y moderna."
            ctaText="Ver Beneficios"
            ctaLink="/xperium"
            bgColor="#FAFAFA"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <ImageTextCTA
            imageSrc="/assets/soluciones/mujer-orvix.svg"
            titleIconSrc="/assets/logos/orvix.svg"
            description="Automatiza tu negocio con más de 15 módulos inteligentes. Desde inventarios hasta facturación electrónica, Orvix es la solución integral para crecer de forma ordenada, segura y escalable."
            ctaText="Ver Beneficios"
            ctaLink="/orvix"
            bgColor="#FFF"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <ImageTextCTA
            imageSrc="/assets/soluciones/meeting-docuvex.svg"
            titleIconSrc="/assets/logos/docuvex.svg"
            description="Gestiona, busca y almacena documentos con agilidad y máxima seguridad. Optimiza tu trabajo en equipo con un sistema confiable y trazable, pensado para proteger información sensible."
            ctaText="Ver Beneficios"
            ctaLink="/docuvex"
            bgColor="#FAFAFA"
          />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <ImageTextCTA
            imageSrc="/assets/soluciones/delivery-insumex.svg"
            titleIconSrc="/assets/logos/insumex.svg"
            description="Suministros de oficina de calidad con atención inmediata. Encuentra desde impresoras hasta computadores, todo para mantener tu empresa activa y sin interrupciones."
            ctaText="Ver Beneficios"
            ctaLink="/insumex"
            bgColor="#FAFAFA"
          />
        </ScrollFade>


        <ScrollFade delay={0.5}>
          <ImageTextCTA
            imageSrc="/assets/soluciones/notebook-solvix.svg"
            titleIconSrc="/assets/logos/solvix.svg"
            description="Soluciones informaticas y soporte técnico confiable para tus plataformas y equipos. Resuelve problemas técnicos de forma rápida y profesional con especialistas disponibles para tu empresa."
            ctaText="Ver Beneficios"
            ctaLink="/solvix"
            bgColor="#FAFAFA"
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
