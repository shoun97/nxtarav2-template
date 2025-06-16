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
                        logoSvg="/assets/logos/insumex-contrast.svg"
                        subtitle="Soluciones informáticas que conectan y resuelven"
                        backgroundImageUrl="/assets/insumex-bg.svg"
                        viewPlansLabel="Beneficios"
                        hireLabel="Contratar"
                        viewPlansHref="#planes"
                        hireHref="#contacto"
                    />
                </ScrollFade>

                <ScrollFade delay={0.5}>
                    <InnovationSectionOrganism
                        title="Lo esencial para que tu empresa no se detenga"
                        subtitle={`En Insumex combinamos calidad, entrega oportuna, atención cercana y soluciones adaptadas.
                        Estos son los pilares que nos permiten brindarte un servicio confiable y eficaz.`}
                        features={[
                            {
                                iconSrc: "/assets/icons/entrega.svg",
                                title: "1. Entrega Oportuna, Trabajo Sin Pausas",
                            },
                            {
                                iconSrc: "/assets/icons/calidad.svg",
                                title: "2. Entrega Oportuna, Trabajo Sin Pausas",
                            },
                            {
                                iconSrc: "/assets/icons/soluciones.svg",
                                title: "3. Soluciones a la Medida de Tu Oficina",
                            },
                            {
                                iconSrc: "/assets/icons/proveedores.svg",
                                title: "4. Proveedores Siempre Listos",
                            },
                        ]}
                    />

                </ScrollFade>

                <CustomSeparator height="32px" />

                <ScrollFade delay={0.5}>
                    <InfoWithImage
                        imageSrc="/assets/insumex/delivery-insumex.svg"
                        imageAlt="chica-solvix"
                        title="Entrega oportuna, trabajo sin pausas"
                        subtitle=""
                        fondo="bg-gray-100"
                        description={`
              Sabemos que cada minuto cuenta. Por eso, en Insumex ofrecemos una atención ágil y entregas oportunas para que tu oficina no se detenga. Sin demoras, sin complicaciones.
              `}
                        imagePosition="left"
                    />
                </ScrollFade>


                <ScrollFade delay={0.5}>
                    <InfoWithImage
                        imageSrc="/assets/insumex/impresora-insumex.svg"
                        imageAlt="redes-solvix"
                        title="Calidad que respalda tu rendimiento"
                        subtitle=""
                        fondo="bg-gray-100"
                        description={`Entregamos insumos de oficina confiables: impresoras, computadores y accesorios que no fallan cuando más los necesitas. Solo marcas y productos de calidad probada.`}
                        imagePosition="right"
                    />
                </ScrollFade>


                <ScrollFade delay={0.5}>
                    <InfoWithImage
                        imageSrc="/assets/insumex/equipo-insumex.svg"
                        imageAlt="network-solvix"
                        title="Soluciones a la medida de tu oficina"
                        subtitle=""
                        fondo="bg-gray-100"
                        description={`Cada empresa es diferente. En Insumex adaptamos nuestras soluciones para cubrir justo lo que tu equipo necesita, desde paquetes personalizados hasta equipamiento especializado.`}
                        imagePosition="left"
                    />
                </ScrollFade>

                <ScrollFade delay={0.5}>
                    <InfoWithImage
                        imageSrc="/assets/insumex/proveedores-insumex.svg"
                        imageAlt="prevencion-solvix"
                        title="Proveedores siempre listos"
                        subtitle=""
                        fondo="bg-gray-100"
                        description={`Trabajamos con aliados confiables que garantizan disponibilidad constante. Con Insumex, siempre tendrás tus insumos a tiempo y sin sorpresas.`}
                        imagePosition="right"
                    />
                </ScrollFade>


            </main>
        </>
    );
};

export default Home;
