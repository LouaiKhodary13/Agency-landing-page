import React from 'react';

const GridItems: React.FC = () => {
  return (
    <div className='h-[60svh] md:h-[70lvh] w-full mt-60 md:mt-0'>
      <div className='grid grid-cols-2 md:grid-cols-4 w-full h-full'>
        <div className='bg-gallery-milkbottles-mob md:bg-gallery-milkbottles bg-cover bg-center'></div>
        <div className='bg-gallery-orange-mob md:bg-gallery-orange bg-center bg-cover'></div>
        <div className='bg-gallery-cone-mob md:bg-gallery-cone bg-center bg-cover'></div>
        <div className='bg-gallery-sugarcubes-mob md:bg-gallery-sugarcubes bg-cover bg-center'></div>
      </div>
    </div>
  );
};
export default GridItems;
