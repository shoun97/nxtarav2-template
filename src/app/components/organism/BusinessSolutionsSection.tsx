// organisms/BusinessSolutionsSection.tsx
import React from "react";
import LogoCardGroup from "../molecules/LogoCardGroup";

const BusinessSolutionsSection = () => {
    return (
        <section className="px-4 md:px-20 py-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Soluciones Digitales y Servicios para Empresas
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
                3 productos digitales y 2 servicios clave que optimizan las ventas y la gestión de tu negocio.
            </p>
            <div className="mt-10">
                <LogoCardGroup
                    topRow={[
                        {
                            imageSrc: "/assets/logos/xperium.svg",
                            title: <span className="text-indigo-800 font-bold">xperium</span>,
                            description: "Tienda online para tu negocio",
                        },
                        {
                            imageSrc: "/assets/logos/orvix.svg",
                            title: <span className="text-yellow-600 font-bold">orvix</span>,
                            description: "Gestión total para empresas",
                        },
                        {
                            imageSrc: "/assets/logos/docuvex.svg",
                            title: <span className="text-blue-700 font-bold">docuvex</span>,
                            description: "Gestor documental empresarial",
                        },
                    ]}
                    bottomRow={[
                        {
                            imageSrc: "/assets/logos/insumex.svg",
                            title: <span className="text-red-600 font-bold">insumex</span>,
                            description: "Insumos de oficina empresariales",
                        },
                        {
                            imageSrc: "/assets/logos/solvix.svg",
                            title: <span className="text-sky-700 font-bold">solvix</span>,
                            description: "Soluciones informáticas para empresas",
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default BusinessSolutionsSection;
