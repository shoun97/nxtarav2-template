import React, { JSX } from "react";
import SvgSeparator1 from "@components/atoms/SVGSeparators/SvgSeparator1";

interface Props {
  title: string;
  isTitleWhite?: boolean;
  details?: JSX.Element | string;
}

const MainTitle = ({ title, details, isTitleWhite = false }: Props) => {
  return (
    <div id={"inicio"} className="flex flex-col w-full text-center px-[16px] xl:px-[214px]">
      {/* Título: cambia estilo según el tamaño */}
      <h3
        className={`
          hidden 
          md:block 
          pb-2 
          text-[20px] 
          ${isTitleWhite ? "text-primary-3" : ""}
        `}
      >
        {title}
      </h3>

      <h6
        className={`
          md:hidden
          pb-2 
          font-extralight 
          text-[20px] 
          md:text-[28px] 
          ${isTitleWhite ? "text-primary-3" : ""}
        `}
      >
        {title}
      </h6>

      {/* Separador SVG (único) */}
      <div className="my-2 flex items-center justify-center">
        <SvgSeparator1 />
      </div>

      {/* Detalles */}
      <div>{details}</div>
    </div>
  );
};

export default MainTitle;
