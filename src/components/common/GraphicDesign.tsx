import React from 'react';

const GraphicDesign: React.FC = () => {
  return (
    <>
      <div className='md:w-1/2 w-full bg-graphic-design-mob md:bg-graphic-design-desk bg-cover bg-center relative min-h-[100vh]'>
        <div className='absolute bottom-20 w-full'>
          <div className='flex items-center justify-center flex-col gap-3'>
            <h2 className='text-2xl text-dark-desaturated-cyan font-extrabold'>
              Graphic Design
            </h2>
            <p className='text-dark-desaturated-cyan md:w-[350px] mx-auto text-center font-barlow font-bold'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GraphicDesign;
