import React from "react";
import Image from "next/legacy/image";

import CustomSeparator from "@components/atoms/CustomSeparator";
import SvgSeparator1 from "@components/atoms/SVGSeparators/SvgSeparator1";
import MainTitle from "@components/molecules/MainTitle";
import SkillCard from "@components/molecules/SkillCard";

const SkillSection = () => {
  return (
    <div className="flex flex-col bg-primary-1 py-[32px]">
      {/* Título y separator siempre arriba */}
      <MainTitle title="Porque Aurus es diferente" isTitleWhite />
      <CustomSeparator height="32px" />

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden gap-[16px] px-[16px]">
        <SkillCard
          imageUrl="/skill-card-1.png"
          imageAlt="Icono 1"
          title="Oro ecológico (sin explotación minera)"
        />
        <SkillCard
          imageUrl="/skill-card-2.png"
          imageAlt="Icono 2"
          title="Precios justos y valorización real"
        />
        <SkillCard
          imageUrl="/skill-card-3.png"
          imageAlt="Icono 3"
          title="Seguridad y legalidad (Acta de Procedencia, contratos)"
        />
        <SkillCard
          imageUrl="/skill-card-4.png"
          imageAlt="Icono 4"
          title="Compromiso con la economía circular"
        />
        <SkillCard
          imageUrl="/skill-card-5.png"
          imageAlt="Icono 5"
          title="Experiencia y expansión internacional"
        />

        <SvgSeparator1 />

        <h5 className="text-primary-3 text-center px-[32px] py-[16px]">
          Comprometidos con algo más que el oro
        </h5>

        <div className="mx-auto">
          <Image
            className="mx-auto"
            src="/lupines-logo.png"
            width={174}
            height={79}
            alt="Logo de Lupines"
            loading="lazy"
          />
        </div>

        <div className="text-primary-4 text-center px-[32px] py-[16px]">
          <p>
            En Aurus creemos que el verdadero valor también está en cómo
            contribuimos.
          </p>
          <CustomSeparator height="16px" />
          <p>
            Por eso apoyamos a la Fundación Lupines, que trabaja por el
            bienestar y desarrollo de personas con discapacidad intelectual.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col gap-[32px] px-[64px] max-w-[1280px] mx-auto">
        {/* Cards distribuidas en 2 filas */}
        <div className="grid grid-cols-3 gap-[24px]">
          <SkillCard
            imageUrl="/skill-card-1.png"
            imageAlt="Icono 1"
            title="Oro ecológico (sin explotación minera)"
          />
          <SkillCard
            imageUrl="/skill-card-2.png"
            imageAlt="Icono 2"
            title="Precios justos y valorización real"
          />
          <SkillCard
            imageUrl="/skill-card-3.png"
            imageAlt="Icono 3"
            title="Seguridad y legalidad (Acta de Procedencia, contratos)"
          />
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          <SkillCard
            imageUrl="/skill-card-4.png"
            imageAlt="Icono 4"
            title="Compromiso con la economía circular"
          />
          <SkillCard
            imageUrl="/skill-card-5.png"
            imageAlt="Icono 5"
            title="Experiencia y expansión internacional"
          />
          <div /> {/* Celda vacía para balancear */}
        </div>

       
        <SvgSeparator1 />
        <div className="flex items-start justify-between mt-[32px] gap-[32px]">
          <div className="flex justify-space-around align-start  w-full" style={{justifyContent: "space-around"}}>
            <div className="mb-[16px] float-right w-[50%]" >
              <Image
                src="/lupines.svg"
                width={345}
                height={155}
                alt="Logo de Lupines"
                loading="lazy"
              />
            </div>
            <div className="w-[50%]">
              <h5 className="text-primary-3 text-[20px] mb-[16px]">
                Comprometidos con algo más que el oro
              </h5>

              <div className="text-primary-4 text-sm leading-relaxed max-w-[480px]">
                <p>
                  En Aurus creemos que el verdadero valor también está en cómo
                  contribuimos.
                </p>
                <CustomSeparator height="16px" />
                <p>
                  Por eso apoyamos a la Fundación Lupines, que trabaja por el
                  bienestar y desarrollo de personas con discapacidad
                  intelectual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
