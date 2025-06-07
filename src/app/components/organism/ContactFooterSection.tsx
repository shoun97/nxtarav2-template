'use client';

import React from 'react';
import IconText from '@components/molecules/IconText';

const ContactFooterSection = () => {
  return (
    <>
      {/* Mobile layout */}
      <div className="flex flex-col items-center justify-center border-b border-primary-3 py-[32px] mx-[16px] lg:hidden w-full text-center">
        <IconText
          iconName="ico-map-pin"
          className="text-primary-3 svg-primary-3 py-3 break-words w-full"
          details="Miraflores 178, Piso 5,  Santiago, Región Metropolitana, Chile"
        />
        <IconText
          iconName="ico-watch"
          className="text-primary-3 svg-primary-3 py-3 break-words w-full"
        >
          <p>Lunes a Viernes:</p>
          <p>09:00 a 18:00.</p>
        </IconText>
        <IconText
          iconName="ico-phone"
          className="text-primary-3 svg-primary-3 py-3 break-words w-full"
          details="+56 9 9509 8115"
        />
        <IconText
          iconName="ico-mail"
          className="text-primary-3 svg-primary-3 py-3 break-words w-full"
          details="contacto@nxtara.com"
        />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-row justify-between items-start border-b border-t border-primary-3 py-[24px] px-[64px] max-w-[1280px] mx-auto text-sm text-primary-3">
        <IconText
          iconName="ico-map-pin"
          className="text-primary-3 svg-primary-3 break-words"
          details="Miraflores 178, Piso 5 C.P.: 8320215 Ciudad: Santiago, Región Metropolitana, Chile"
        />
        <IconText
          iconName="ico-watch"
          className="text-primary-3 svg-primary-3 break-words"
        >
          <div className="flex flex-col">
            <span>Lunes a Viernes: 09:00 a 18:00.</span>
          </div>
        </IconText>
        <IconText
          iconName="ico-phone"
          className="text-primary-3 svg-primary-3 break-words"
          details="+56 9 9509 8115"
        />
        <IconText
          iconName="ico-mail"
          className="text-primary-3 svg-primary-3 break-words"
          details="contacto@nxtara.com"
        />
      </div>
    </>
  );
};

export default ContactFooterSection;
