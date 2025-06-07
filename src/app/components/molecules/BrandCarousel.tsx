import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box } from "@mui/material";

type BrandCarouselProps = {
  images: string[];
  speed?: number;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
};

const BrandCarousel = ({
  images,
  speed = 1000,
  infinite = true,
  autoplay = true,
  autoplaySpeed = 4000,
  showDots = false,
}: BrandCarouselProps) => {
  const settings = {
    dots: showDots,
    arrows: false,
    infinite,
    speed,
    autoplay,
    autoplaySpeed,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        "& .slick-slide > div": {
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "700px",
              position: "relative", // 🔑 Necesario para layout="fill"
            }}
          >
            <Image
              src={src}
              alt={`Marca ${index}`}
              fill
              style={{
                objectFit: "contain", // o "contain" si prefieres mostrar todo sin recortar
              }}
              quality={100}
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BrandCarousel;
