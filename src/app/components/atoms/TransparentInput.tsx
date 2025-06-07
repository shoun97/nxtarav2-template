import React from 'react';

interface Props {
  label: string;
  type?: string;
  required?: boolean;
}

const TransparentInput = ({ label, type = 'text', required = false }: Props) => {
  return (
    <div className='mb-3 '>
      <input
        className='w-full p-[10px] bg-gray-100  border-b-1 outline-0 text-primary-1 placeholder:text-gray-400'
        type={type}
        placeholder={label}
        required={required}
      />
    </div>
  );
};

export default TransparentInput;
