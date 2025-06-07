import React from 'react';

const CheckboxConsent = () => {
  return (
    <label className='flex items-center gap-2 px-[16px] py-2'>
      <input
        type='checkbox'
        required
      />
      <span className='text-primary-1'> Acepto ser contactado por Aurus para responder esta solicitud.</span>
    </label>
  );
};

export default CheckboxConsent;
