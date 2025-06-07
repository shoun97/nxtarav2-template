'use client';

import React from 'react';
import CustomIcon from '@components/atoms/CustomIcon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  to: string;
}

const SocialMediaButton = ({ iconName = 'ico-instagram', to, ...props }: Props) => {
  const toSocialMedia = () => {
    window.open(to, '_blank');
  };

  return (
    <button
      onClick={toSocialMedia}
      className='flex flex-col px-4 svg-primary-4'
      {...props}>
      <CustomIcon name={iconName} />
    </button>
  );
};

export default SocialMediaButton;
