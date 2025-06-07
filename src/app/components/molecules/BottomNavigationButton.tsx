import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  label: string;
  navigationRef: string;
}

const BottomNavigationButton = ({ iconName, label, navigationRef }: Props) => {
  return (
    <button>
      <Link
        href={navigationRef}
        className='flex flex-col items-center justify-center'
        scroll={true}>
        <Image 
          src={iconName}
          height={24}
          width={24}
          alt={label}
        />
        <p>{label}</p>
      </Link>
    </button>
  );
};

export default BottomNavigationButton;
