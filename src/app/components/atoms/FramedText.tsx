import React from 'react';

const FramedText = () => {
  return (
    <div className='flex flex-col items-center justify-center align-middle mx-auto bg-frame w-[284px] h-[162px]'>
      <div className="flex items-center gap-2 mt-10">
        <a
          href="mailto:contacto@aurusjoyeria.com.py"
          className="text-primary-1 underline hover:text-primary-2 transition-colors"
        >
          contacto@aurusjoyeria.com.py
        </a>
      </div>

    </div>
  );
};

export default FramedText;
