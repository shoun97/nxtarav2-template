// components/organisms/InfoWithImage.tsx
import CustomImage from "../atoms/CustomImage";
import TextBlock from "../molecules/TextBlock";

interface InfoWithImageProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  imagePosition?: "left" | "right";
  fondo?: string;
}

const InfoWithImage: React.FC<InfoWithImageProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  imagePosition = "left",
  fondo = "bg-white",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className={`${fondo} py-12 px-6 md:px-16`}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {isImageLeft && <CustomImage src={imageSrc} alt={imageAlt} />}
        <TextBlock title={title} subtitle={subtitle} description={description} />
        {!isImageLeft && <CustomImage src={imageSrc} alt={imageAlt} />}
      </div>
    </div>
  );
};

export default InfoWithImage;
