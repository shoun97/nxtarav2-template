// atoms/IconCardAtom.tsx
import React from "react";

interface IconCardAtomProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

const IconCardAtom: React.FC<IconCardAtomProps> = ({
  icon,
  title,
  description,
  bgColor = "#F5F5F5",
}) => (
  <div
    className="p-4 rounded-xl shadow-md flex gap-4 items-start"
    style={{ backgroundColor: bgColor }}
  >
    <div className="p-2 rounded-lg bg-white shadow-sm text-pink-600">{icon}</div>
    <div>
      <h4 className="font-semibold text-pink-600">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

export default IconCardAtom;
