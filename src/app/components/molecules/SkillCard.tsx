import React from 'react';
import Image from 'next/legacy/image';

interface Props {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

const SkillCard = ({ imageUrl, imageAlt, title }: Props) => {
  return (
    <div className='flex flex-col p-[24px]'>
      <div className='mx-auto'>
        <Image
          className='mx-auto'
          src={imageUrl}
          width={75}
          height={75}
          alt={imageAlt}
          loading='lazy'
        />
      </div>
      <span className='text-center text-primary-4 px-[16px]'>{title}</span>
    </div>
  );
};

export default SkillCard;
