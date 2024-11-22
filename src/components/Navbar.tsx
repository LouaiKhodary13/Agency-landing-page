'use client';
import navItems from '@/data/navItems';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-transparent absolute w-full top-8 z-10'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='#'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image
            width={120}
            height={120}
            src='/assets/logo.svg'
            className='h-8'
            alt='Logo'
          />
        </Link>
        <a
          onClick={toggleMenu}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none'
          aria-controls='navbar-default'
          aria-expanded={isOpen}
        >
          <Image
            src='/assets/icon-hamburger.svg'
            width={60}
            height={60}
            alt='icon-hamburger'
          />
        </a>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-10/12  md:block md:w-auto fixed top-24 left-5 md:static`}
          id='navbar-default'
        >
          <ul className='flex flex-col justify-center items-center gap-5 h-[350px] md:h-0  border-gray-100  bg-gray-50 md:bg-transparent md:flex-row'>
            {navItems.map((item, index) => {
              const { path, label, id } = item;
              return (
                <li key={index}>
                  <a
                    href={path}
                    className={`font-normal inline-block capitalize p-5 rounded-3xl ${
                      isOpen
                        ? id === 4
                          ? 'bg-[#fad400] text-black'
                          : 'text-gray-500 hover:bg-[#fad400]'
                        : id === 4
                        ? 'bg-white text-black'
                        : 'hover:bg-[#6fcfff] text-white'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
