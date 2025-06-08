// organisms/SectionWithCards.tsx
import React from "react";
import CardGroup from "../molecules/CardGroup";

interface SectionWithCardsProps {
  title: string;
  subtitle?: string;
  cards: {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description?: string;
    bgColor?: string;
    className?: string;
  }[];
  columns?: number;
}

const SectionWithCards: React.FC<SectionWithCardsProps> = ({
  title,
  subtitle,
  cards,
  columns,
}) => {
  return (
    <section className="px-4 md:px-20 py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 text-base md:text-lg">{subtitle}</p>
      )}
      <div className="mt-10">
        <CardGroup cards={cards} columns={columns} />
      </div>
    </section>
  );
};

export default SectionWithCards;
