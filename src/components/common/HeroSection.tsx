import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='bg-hero-pattern-mob md:bg-hero-pattern bg-cover bg-center'>
      <div className=' h-[100vh]  w-full relative flex justify-center items-center'>
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-20'>
          <h2 className='text-xl md:text-5xl tracking-widest text-white text-center'>
            WE ARE CREATIVES
          </h2>
          <Image
            src='/assets/icon-arrow-down.svg'
            width={30}
            height={30}
            alt='arrow down'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
