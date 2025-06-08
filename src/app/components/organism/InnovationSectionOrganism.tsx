// organisms/InnovationSectionOrganism.tsx
import React from "react";
import FeatureGroupMolecule from "../molecules/FeatureGroupMolecule";

const InnovationSectionOrganism = () => {
  return (
    <section className="text-center px-4 md:px-20 py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Innovación digital que potencia tu negocio
      </h2>
      <p className="mt-4 text-gray-600 text-base md:text-lg">
        Cada <strong>negocio es único</strong>. Nuestras soluciones digitales se adaptan a tus necesidades,
        optimizan procesos y mejoran la conexión con tu audiencia.
      </p>
      <FeatureGroupMolecule />
    </section>
  );
};

export default InnovationSectionOrganism;
