import Image from "next/image";

interface BannerProps {
  mobileSrc: string;
  desktopSrc: string;
  alt?: string;
}

export const Banner = ({
  mobileSrc,
  desktopSrc,
  alt = "Banner",
}: BannerProps) => {
  return (
    <>
      {/* Imagen para teléfonos (hasta 767px) */}
      <div className="block md:hidden w-full">
        <Image
          src={mobileSrc}
          alt={`${alt} móvil`}
          width={1200}
          height={1979}
          className="w-full h-auto"
          unoptimized
          priority
        />
      </div>

      {/* Imagen para tablets y desktop (768px en adelante) */}
      <div className="hidden md:block w-full">
        <Image
          src={desktopSrc}
          alt={`${alt} desktop`}
          width={1200}
          height={453}
          quality={100}
          className="w-full h-auto"
          unoptimized
          priority
        />
      </div>
    </>
  );
};

export default Banner;
