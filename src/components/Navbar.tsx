'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-transparent fixed w-full top-4 z-10'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='https://flowbite.com/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image
            width={120}
            height={120}
            src='/assets/logo.svg'
            className='h-8'
            alt='Logo'
          />
        </a>
        <button
          onClick={toggleMenu}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded={isOpen}
        >
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-10/12 md:block md:w-auto fixed top-20 left-5 md:static bg-transparent md:bg-transparent`}
          id='navbar-default'
        >
          <ul className='font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-black  rounded md:bg-transparent'
                aria-current='page'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-black  rounded md:bg-transparent '
                aria-current='page'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-black rounded md:bg-transparent'
                aria-current='page'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-black  rounded md:bg-transparent'
                aria-current='page'
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
