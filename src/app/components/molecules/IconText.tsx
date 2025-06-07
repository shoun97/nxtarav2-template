import React, { JSX } from 'react';

import CustomIcon from '@components/atoms/CustomIcon';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string;
  details?: JSX.Element | string;
}
const IconText = ({ iconName, details, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`grid grid-cols-12  w-full px-2  ${props.className}`}>
      <div className='col-span-2 flex items-center justify-end '>
        <CustomIcon name={iconName} />
      </div>
      <div className='col-span-9 ps-2 '>
        {details && <p className='text-primary-3 '>{details}</p>}
        {props.children && <div className='text-primary-3 text-[16px] font-normal leading-[24px]'>{props.children}</div>}
      </div>
    </div>
  );
};

export default IconText;
