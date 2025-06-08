import React from "react";
import FeatureGroupMolecule, { FeatureCard } from "../molecules/FeatureGroupMolecule";

interface InnovationSectionOrganismProps {
  title: string;
  subtitle?: string;
  features: FeatureCard[];
}

const InnovationSectionOrganism: React.FC<InnovationSectionOrganismProps> = ({
  title,
  subtitle,
  features,
}) => {
  return (
    <section className="text-center px-4 md:px-20 py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 text-base md:text-lg">{subtitle}</p>
      )}
      <FeatureGroupMolecule features={features} />
    </section>
  );
};

export default InnovationSectionOrganism;
