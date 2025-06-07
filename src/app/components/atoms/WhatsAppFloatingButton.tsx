import React from 'react';
import Image from 'next/image';

const WhatsAppFloatingButton = () => {
  const phoneNumber = '56995098115';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target='_blank'
      className='fixed bottom-[80px] right-[30px] bg-complementary-1 p-[10px] rounded-full z-10 shadow-lg'
      aria-label='Contáctanos por WhatsApp'>
      <Image
        src='/wsp.svg'
        alt='WhatsApp'
        width={40}
        height={40}
      />
    </a>
  );
};

export default WhatsAppFloatingButton;
