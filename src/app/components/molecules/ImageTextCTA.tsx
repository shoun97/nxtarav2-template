import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageTextCTAProps {
  imageSrc: string;
  imageAlt?: string;
  titleIconSrc: string;
  titleIconAlt?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgColor?: string;
  reverse?: boolean;
}

const ImageTextCTA: React.FC<ImageTextCTAProps> = ({
  imageSrc,
  imageAlt = "Imagen",
  titleIconSrc,
  titleIconAlt = "Logo",
  description,
  ctaText,
  ctaLink,
  bgColor = "#fff",
  reverse = false,
}) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-24`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Imagen */}
      <div
        className={`w-full md:w-[460px] flex justify-center ${
          reverse ? "order-2 md:order-1" : "order-1"
        }`}
      >
        <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-[30px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 460px"
          />
        </div>
      </div>

      {/* Texto */}
      <div
        className={`w-full md:max-w-[340px] mt-10 md:mt-0 ${
          reverse ? "order-1 md:order-2" : "order-2"
        } px-4`}
        style={{ marginLeft: reverse ? 0 : "119px", marginRight: reverse ? "119px" : 0 }}
      >
        <div className="flex justify-center md:justify-start mb-4">
          <Image
            src={titleIconSrc}
            alt={titleIconAlt}
            width={197}
            height={60}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <p className="text-gray-800 text-sm leading-relaxed mb-5 md:text-[15px] md:leading-[24px]">
          {description}
        </p>
        <div className="flex justify-center md:justify-center">
          <Link
            href={ctaLink}
            className="text-[#ff007a] text-sm font-semibold hover:underline flex items-center gap-1 text-center"
          >
            {ctaText}
            <span>➜</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCTA;
