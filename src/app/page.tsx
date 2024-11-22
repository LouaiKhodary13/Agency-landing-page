import HeroSection from '@/components/common/HeroSection';
import MiddleSection from '@/components/common/MiddleSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* section 1 */}
      <div className='w-full flex h-[80lvh] flex-col md:flex-row'>
        <div className='w-full h-full md:w-1/2  order-2 md:order-1 flex flex-col items-center justify-center'>
          <div className='md:w-[400px] w-[300px] '>
            <h2 className='text-2xl md:text-4xl md:w-[400px] w-[300px] text-very-dark-desaturated-blue text-center md:text-left'>
              Transform your brand
            </h2>
            <p className='md:w-[400px] w-[300px] mt-5 text-dark-grayish-blue text-sm'>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing fro you.
            </p>
            <button className='mt-5 uppercase relative hover:opacity-75'>
              Learn more
            </button>
          </div>
        </div>
        <div className='w-full h-svh md:w-1/2 md:h-full order-1 md:order-2 bg-egg-sec-mob lg:bg-egg-sec bg-cover bg-center'></div>
      </div>
      {/* section 2 */}
      <MiddleSection />
      {/* <div className='w-full flex h-[80lvh] flex-col md:flex-row'>
        <div className='w-full h-svh md:w-1/2 md:h-full order-1  bg-stand-out-mob lg:bg-stand-out bg-cover bg-center'></div>
        <div className='w-full h-full md:w-1/2  order-2 flex flex-col items-center justify-center'>
          <div className='md:w-[400px] w-[300px] '>
            <h2 className='text-2xl md:text-4xl md:w-[400px] w-[300px] text-very-dark-desaturated-blue text-center md:text-left'>
              stand out to the right audience
            </h2>
            <p className='md:w-[400px] w-[300px] mt-5 text-dark-grayish-blue text-sm'>
              using a collaborative formula of designers, researchers,
              photographers,videographers,and copywriters well build and extend
              your brand in digital places.
            </p>
            <button className='mt-5 uppercase relative hover:opacity-75'>
              Learn more
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
