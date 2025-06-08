// components/atoms/CustomImage.tsx
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className }) => (
  <div className={`rounded-3xl overflow-hidden ${className || ""}`}>
    <Image src={src} alt={alt} width={400} height={400} className="w-full h-auto object-cover" />
  </div>
);

export default CustomImage;
