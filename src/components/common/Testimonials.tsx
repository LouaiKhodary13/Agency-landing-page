import testimonialsListItems from '@/data/testimonials';
import Image from 'next/image';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <>
      <div className='h-[100svh] md:h-[80lvh] flex items-center flex-col'>
        <h2 className='text-2xl uppercase text-dark-grayish-blue mt-32 font-fraunces tracking-wider'>
          client Testimonials
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full'>
          {testimonialsListItems.map((item, index) => {
            return (
              <div
                className='flex justify-center items-center flex-col'
                key={index}
              >
                <Image
                  className='rounded-full mb-5'
                  src={item.img}
                  width={60}
                  height={60}
                  alt={item.name}
                />
                <p className='w-[300px] text-center text-very-dark-grayish-blue font-barlow'>
                  {item.info}
                </p>
                <div className='mt-5 flex items-center justify-center flex-col gap-2'>
                  <p className='text-very-dark-desaturated-blue font-extrabold'>
                    {item.name}
                  </p>
                  <span className='text-grayish-blue font-barlow font-thin'>
                    {item.position}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Testimonials;
