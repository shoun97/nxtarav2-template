import React from "react";
import IconCardAtom from "../atoms/IconCardAtom";

export interface FeatureCard {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description?: string;
  bgColor?: string;
}

interface FeatureGroupMoleculeProps {
  features: FeatureCard[];
}

const FeatureGroupMolecule: React.FC<FeatureGroupMoleculeProps> = ({ features }) => (
  <div className="flex flex-wrap justify-center gap-6 mt-8">
    {features.map((feature, index) => (
      <IconCardAtom key={index} {...feature} />
    ))}
  </div>
);

export default FeatureGroupMolecule;
