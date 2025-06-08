// atoms/CardItem.tsx
import React from "react";

interface CardItemProps {
  icon?: React.ReactNode; // Puede ser SVG o imagen
  title: React.ReactNode; // Puede ser texto o imagen
  description?: string;
  bgColor?: string;
  className?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  icon,
  title,
  description,
  bgColor = "#F5F5F5",
  className = "",
}) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md flex gap-4 items-start ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {icon && <div className="p-2 rounded-lg bg-white shadow-sm">{icon}</div>}
      <div>
        <div className="font-semibold text-gray-800">{title}</div>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default CardItem;
