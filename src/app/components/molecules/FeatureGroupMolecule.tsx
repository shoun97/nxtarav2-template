// molecules/FeatureGroupMolecule.tsx
import React from "react";
import IconCardAtom from "../atoms/IconCardAtom";
import { FaHandPointer, FaHandshake, FaSlidersH } from "react-icons/fa";

const FeatureGroupMolecule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <IconCardAtom
        icon={<FaHandPointer />}
        title="Interacción intuitiva"
        description="Disfruta de una experiencia fluida que facilita la navegación y aumenta la satisfacción del cliente."
      />
      <IconCardAtom
        icon={<FaHandshake />}
        title="Postventa confiable"
        description="Ofrecemos atención inmediata y apoyo constante, generando confianza y fidelidad en tus clientes."
      />
      <IconCardAtom
        icon={<FaSlidersH />}
        title="Escalabilidad con tu negocio."
        description="Nuestras soluciones crecen contigo, adaptándose a tus necesidades para facilitar la expansión."
      />
    </div>
  );
};

export default FeatureGroupMolecule;