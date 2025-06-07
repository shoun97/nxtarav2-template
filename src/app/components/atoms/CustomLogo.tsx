import React from 'react';
import Image from 'next/legacy/image';

interface CustomLogoProps {
  imageUrl: string;
  imageAlt: string;
}

const CustomLogo = ({ imageUrl, imageAlt }: CustomLogoProps) => {
  return (
    <div className='w-100 flex items-center justify-center'>
      <div className='p-3'>
        <Image
          src={imageUrl}
          width={125}
          height={40}
          alt={imageAlt}
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default CustomLogo;
