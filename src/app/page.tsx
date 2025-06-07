"use client";
import { JSX } from "react";

import CustomSeparator from "@components/atoms/CustomSeparator";
import Banner from "@components/molecules/Banner";
import MainCover from "@components/organism/MainCover";
import CompanySection from "@components/organism/CompanySection";
import BrandsSection from "@components/organism/BrandsSection";
import Header from "@components/organism/Header";

/**
 * Home
 *
 * Componente principal de la página de inicio.
 * Incluye todos los componentes principales de la página.
 *
 * @returns {JSX.Element}
 */
import ScrollFade from "@components/atoms/ScrollFade";
import PolicyInfoSection from "./components/organism/PolicyInfoSection";
import Footer from "./components/organism/Footer";
import BrandCarousel from "./components/molecules/BrandCarousel";

const Home = (): JSX.Element => {
  return (
    <>
      <Header transparent />
      <main
        className="flex flex-col overflow-y-hidden"
        style={{ overflowX: "hidden" }}
      >
        <ScrollFade delay={0.1}>
          <MainCover />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <BrandCarousel
            images={[
              "/carrusel-hero/carrusel.svg",
              "/carrusel-hero/carrusel2.svg",
              "/carrusel-hero/carrusel3.svg",
            ]}
            speed={3000}
            infinite={true}
            autoplay={true}
            autoplaySpeed={500}
            showDots={false}
          />
        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <CompanySection />
        </ScrollFade>

        <CustomSeparator height="32px" />

        <ScrollFade delay={0.5}>
          <BrandsSection />
        </ScrollFade>

        <ScrollFade delay={0.5}>
          <Banner mobileSrc="/banner-mobile.gif" desktopSrc="/banner.gif" />

          <PolicyInfoSection />
        </ScrollFade>

        <Footer />
      </main>
    </>
  );
};

export default Home;
