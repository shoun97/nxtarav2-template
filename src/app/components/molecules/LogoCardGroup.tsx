// molecules/LogoCardGroup.tsx
import React from "react";
import LogoCardItem from "../atoms/LogoCardItem";

interface LogoCard {
    imageSrc: string;
    imageAlt?: string;
    title: React.ReactNode;
    description?: string;
    bgColor?: string;
    className?: string;
}

interface LogoCardGroupProps {
    topRow: LogoCard[];
    bottomRow: LogoCard[];
    center?: boolean; 
}

const LogoCardGroup: React.FC<LogoCardGroupProps> = ({
    topRow,
    bottomRow,
    center = true,
}) => {
    const rowStyle = `flex flex-wrap justify-${center ? "center" : "start"} gap-6`;

    return (
        <div className="flex flex-col items-center gap-8">
            <div className={rowStyle}>
                {topRow.map((card, idx) => (
                    <LogoCardItem key={`top-${idx}`} {...card} />
                ))}
            </div>
            <div className={rowStyle}>
                {bottomRow.map((card, idx) => (
                    <LogoCardItem key={`bottom-${idx}`} {...card} />
                ))}
            </div>
        </div>
    );
};

export default LogoCardGroup;
