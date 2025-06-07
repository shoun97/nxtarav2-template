import Image from "next/image";

interface PolicyInfoCardProps {
  title: string;
  description: string;
  iconSrc?: string;
}

const PolicyInfoCard = ({
  title,
  description,
  iconSrc,
}: PolicyInfoCardProps) => {
  return (
    <>
      {/* Versión Mobile */}
      <div className="md:hidden text-white p-4 w-full relative bg-transparent rounded-xl shadow">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="Decoración"
            width={16}
            height={16}
            className="absolute top-4 right-4"
          />
        )}
        <h3 className="text-base font-semibold mb-2 border-b border-pink-500 pb-2">
          {title}
        </h3>
        <p className="text-sm">{description}</p>
      </div>

      {/* Versión Desktop */}
      <div className="hidden md:block text-white p-8 w-full relative bg-transparent rounded-2xl shadow-lg" style={{minWidth: "520px !important"}}>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt="Decoración"
            width={16}
            height={16}
            className="absolute top-4 right-4"
          />
        )}
        <h3 className="text-lg font-semibold mb-2 border-b border-pink-500 pb-2">
          {title}
        </h3>
        <p className="text-base">{description}</p>
      </div>
    </>
  );
};

export default PolicyInfoCard;
