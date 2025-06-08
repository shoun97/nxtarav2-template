// components/atoms/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CustomHeroButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "primary",
  className = "",
}) => {
  const base = "px-6 py-2 rounded-full font-semibold transition duration-300";
  const styles = {
    primary: `${base} bg-[#A84FFF] text-white hover:bg-[#9228e9]`,
    secondary: `${base} border border-white text-white hover:bg-white hover:text-black`,
  };

  return <div className={`${styles[variant]} ${className}`}>{text}</div>;
};

export default CustomHeroButton;
