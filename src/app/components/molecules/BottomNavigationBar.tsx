'use client';
import React from 'react';

import BottomNavigationButton from '@components/molecules/BottomNavigationButton';

interface IBottomNavigationItem {
  id: string;
  iconName: string;
  label: string;
  href: string;
}

export const bottomNavigationItems: IBottomNavigationItem[] = [
  { id: 'home', iconName: '/home-icon.svg', label: 'Inicio', href: '#home' },
  { id: 'service', iconName: '/x-icon.svg', label: 'Productos', href: '#services' },
];

const BottomNavigationBar = () => {


  return (
    <div className='fixed bottom-0 w-full bg-white z-10000' >
      <div className='flex justify-around items-center w-100 p-3'>
        {bottomNavigationItems.map((item) => (
          <div
            key={item.label}
            className='flex flex-col items-center'>
            <BottomNavigationButton
              iconName={item.iconName}
              label={item.label}
              navigationRef={item.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigationBar;
