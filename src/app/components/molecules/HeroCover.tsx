// components/molecules/HeroCover.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomHeroButton from "@components/atoms/CustomHeroButton";

interface HeroCoverProps {
  logoSvg: string;
  subtitle: string;
  backgroundImageUrl: string;
  viewPlansLabel?: string;
  hireLabel?: string;
  viewPlansHref?: string;
  hireHref?: string;
}

const HeroCover: React.FC<HeroCoverProps> = ({
  logoSvg,
  subtitle,
  backgroundImageUrl,
  viewPlansLabel = "Ver planes",
  hireLabel = "Contratar",
  viewPlansHref = "#planes",
  hireHref = "#contratar",
}) => {
  return (
    <div
      id="Home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white"
    >
      {/* Fondo */}
      <Image
        src={backgroundImageUrl}
        alt="Fondo"
        fill
        priority
        style={{ objectFit: "cover", zIndex: 0 }}
      />

      {/* Contenido */}
      <div className="z-20 text-center px-4 max-w-4xl mx-auto mb-20">
        <div className="flex flex-col items-center gap-6">
          {/* Logo como SVG */}
          <Image
            src={logoSvg}
            alt="Logo de Xperium"
            width={300}
            height={100}
            className="mb-2"
          />

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl font-medium text-neutral-100 max-w-xl leading-snug">
            {subtitle}
          </p>

          {/* Botones como links */}
          <div className="flex gap-4 mt-4 justify-center flex-wrap">
            <Link href={viewPlansHref}>
              <CustomHeroButton text={viewPlansLabel} variant="secondary" />
            </Link>
            <Link href={hireHref}>
              <CustomHeroButton text={hireLabel} variant="primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCover;
