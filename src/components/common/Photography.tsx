import React from 'react';

const Photography: React.FC = () => {
  return (
    <>
      <div className='md:w-1/2 w-full bg-photography-mob md:bg-photography-desk bg-cover md:bg-cover bg-center min-h-[100vh] md:min-h-screen relative'>
        <div className='absolute bottom-20 w-full'>
          <div className='flex items-center justify-center flex-col gap-3'>
            <h2 className='text-2xl text-dark-blue font-extrabold'>
              Photography
            </h2>
            <p className='text-dark-blue md:w-[350px] mx-auto text-center font-barlow font-bold'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Photography;
