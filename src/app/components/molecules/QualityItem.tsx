import Image from "next/image";

interface QualityItemProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  iconSrc?: string;
}

const QualityItem = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt = "deco",
  imagePosition = "right",
  iconSrc = "/borde-derecho-arriba.svg",
}: QualityItemProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`relative flex flex-col ${
        isImageLeft ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-6 py-12 md:py-8 overflow-visible`}
    >
      {/* Imagen solo para mobile */}
      <div
        className={`absolute top-[-1px] ${
          isImageLeft ? "left-4" : "right-10"
        } md:hidden flex justify-center z-10`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={90}
          height={90}
          className="object-contain"
        />
      </div>

      {/* Imagen solo para desktop */}
      <div className={`hidden md:flex md:static md:w-1/3 justify-center z-10`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={140} // Ejemplo: un tamaño distinto
          height={140}
          className="object-contain"
        />
      </div>

      {/* Contenedor del texto */}
      <div className="relative bg-[#3D1C7C] text-white rounded-2xl px-6 pt-16 md:pt-6 md:px-8 py-6 shadow-lg w-full md:w-2/3 z-0">
        {/* Ícono decorativo */}
        {iconSrc && (
          <div className="absolute top-4 right-4">
            <Image src={iconSrc} alt="Decoración" width={20} height={20} />
          </div>
        )}
        <h3 className="text-lg md:text-xl font-extrabold mb-2">
          {number}. {title}
        </h3>
        <p className="text-sm md:text-base font-light">{description}</p>
      </div>
    </div>
  );
};

export default QualityItem;
