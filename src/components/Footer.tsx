import Image from 'next/image';
import React from 'react';
import navItems from '@/data/navItems';
const Footer: React.FC = () => {
  return (
    <footer className='h-[90vh]  bg-[#90d4c5]'>
      <div className='pt-24 flex items-center justify-center flex-col gap-10 '>
        <Image
          src='/assets/footer-logo.svg'
          width={150}
          height={150}
          alt='logo'
        />
        <ul className='flex flex-col justify-center items-center gap-5  md:bg-transparent md:flex-row'>
          {navItems.map((item, index) => {
            const { path, label, id } = item;
            return (
              <li key={index}>
                <a
                  href={path}
                  className={`  ${
                    id === 4
                      ? 'hidden'
                      : 'font-extrabold inline-block capitalize p-5 rounded-3xl text-[#6bafa0]'
                  } `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='flex items-center justify-center gap-8 md:gap-4 mt-5 md:mt-10'>
          <Image
            src='/assets/icon-facebook.svg'
            width={20}
            height={20}
            alt='facebook'
          />{' '}
          <Image
            src='/assets/icon-instagram.svg'
            width={20}
            height={20}
            alt='instagram'
          />
          <Image
            src='/assets/icon-twitter.svg'
            width={20}
            height={20}
            alt='twitter'
          />{' '}
          <Image
            src='/assets/icon-pinterest.svg'
            width={20}
            height={20}
            alt='pinterset'
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
