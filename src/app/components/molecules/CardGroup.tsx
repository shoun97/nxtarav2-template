// molecules/CardGroup.tsx
import React from "react";
import CardItem from "../atoms/CardItem";

interface CardData {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  bgColor?: string;
  className?: string;
}

interface CardGroupProps {
  cards: CardData[];
  columns?: number;
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, columns = 3 }) => {
  const gridCols = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`;

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {cards.map((card, idx) => (
        <CardItem key={idx} {...card} />
      ))}
    </div>
  );
};

export default CardGroup;
