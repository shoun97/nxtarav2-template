// atoms/LogoCardItem.tsx
import React from "react";
import Image from "next/image";

interface LogoCardItemProps {
  imageSrc: string;
  imageAlt?: string;
  description?: string;
  bgColor?: string;
  className?: string;
}

const LogoCardItem: React.FC<LogoCardItemProps> = ({
  imageSrc,
  imageAlt = "Logo",
  description,
  bgColor = "var(--Light_Mode-light-fond-3, #F5F5F5)",
  className = "",
}) => {
  return (
    <div
      className={`flex justify-start items-center rounded-[16px] ${className}`}
      style={{
        backgroundColor: bgColor,
        padding: "28px 14px 28.925px 16px",
        width: "343px",
        height: "101px",
        boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex items-center">
        <div className="min-w-[40px]" />
        <div className="text-start">
          <div
            className="mb-1"
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={imageSrc} alt={imageAlt} width={140} height={45} />
          </div>
          {description && (
            <p className="text-gray-600 text-sm leading-snug">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoCardItem;
