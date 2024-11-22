import { middleSectionItems } from '@/data/middleSection';
import React from 'react';



const MiddleSection: React.FC= () => {
  return (
     {middleSectionItems.map((item,index)=>{
      return  <div className='w-full flex h-[80lvh] flex-col md:flex-row'>
   
      <div
        className={`w-full h-svh md:w-1/2 md:h-full order-1  bg-${item.imageUrlMob} lg:bg-${item.imgUrlDesktop} bg-cover bg-center`}
      ></div>
      <div className='w-full h-full md:w-1/2  order-2 flex flex-col items-center justify-center'>
        <div className='md:w-[400px] w-[300px] '>
          <h2 className='text-2xl md:text-4xl md:w-[400px] w-[300px] text-very-dark-desaturated-blue text-center md:text-left'>
            {item.heading}
          </h2>
          <p className='md:w-[400px] w-[300px] mt-5 text-dark-grayish-blue text-sm'>
            {item.info}
          </p>
          <button className='mt-5 uppercase relative hover:opacity-75'>
            {item.buttonText}
          </button>
        </div>
      </div>
    </div>
     })}
   
  );
};

export default MiddleSection;
