import React from 'react';
import { middleSectionItems } from '@/data/middleSection';

const MiddleSection: React.FC = () => {
  return (
    <div>
      {middleSectionItems.map((item, index) => (
        <div
          key={item.id}
          className='w-full flex h-[80vh] flex-col md:flex-row-reverse'
        >
          <div
            className={`w-full h-full md:w-1/2 md:h-full order-${index} bg-${item.imageUrlMob} lg:bg-${item.imgUrlDesktop} bg-cover bg-center`}
          ></div>
          <div
            className={`w-full h-full md:w-1/2 flex flex-col items-center justify-center`}
          >
            <div className='md:w-[400px] w-[300px]'>
              <h2 className='text-3xl md:text-4xl md:w-[400px] w-[300px] text-very-dark-desaturated-blue text-center md:text-left'>
                {item.heading}
              </h2>
              <p className='md:w-[400px] w-[300px] mt-5 text-dark-grayish-blue text-sm'>
                {item.info}
              </p>
              <div className='flex items-center justify-center md:justify-start'>
                <button className='mt-5 uppercase relative hover:opacity-75 mb-10'>
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MiddleSection;
