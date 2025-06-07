import React from 'react';

import Image from 'next/image';


const HeaderDocuvex = () => {
  return (
    <div className='fixed top-0 bg-primary-1 shadow-lg w-full z-10000'>
      <Image
        src={'/nxtara.svg'}
        alt={'Nxtara Logo'}
        width={200}
        height={50}
        className="object-contain"
      />
      
    </div>
  );
};

export default HeaderDocuvex;
