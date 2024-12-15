'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div>
      <nav className='p-3 flex justify-between items-center bg-white cursor-pointer'>
        <div className='flex items-center'>
          <Image 
            className='object-cover max-w-22 max-h-22' 
            src={"/Icon.png"} 
            width={22} 
            height={22} 
            alt='logo' 
          />
          <span className='ml-2 text-lg font-semibold hover:text-gray-800'>Nexcent</span>
        </div>
        
        {/* Navbar menu */}
        <div className='hidden lg:flex gap-12'>
          <Link href={'#'} className='py-4 font-normal hover:text-accent'>
            Home
          </Link>
          <Link href={'#'} className='py-4 font-normal hover:text-accent'>
            Features
          </Link>
          <Link href={'#'} className='py-4 font-normal hover:text-accent'>
            Community
          </Link>
          <Link href={'#'} className='py-4 font-normal hover:text-accent'>
            Blogs
          </Link>
          <Link href={'#'} className='py-4 font-normal hover:text-accent'>
            Pricing
          </Link>
          <Link href={'#'}>
            <button className='h-[36px] w-[135px] hidden lg:flex items-center gap-2 bg-[#4CAF4F] text-white my-3 px-6 rounded-sm hover:bg-[#62b264]'>
              Register
              <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className='p-2 lg:hidden' onClick={handleMenu}>
          {isMenuOpen ? <IoMdClose /> : <IoMenuSharp />}
        </button>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <div id='nav-dialogue' className='fixed z-10 p-3 bg-white inset-0'>
            <div className='flex justify-between items-center'>
              <Image 
                className='object-cover max-w-22 max-h-22' 
                src={"/logo.png"} 
                width={107.54} 
                height={16.71} 
                alt='logo' 
              />
              <button className='p-2 lg:hidden' onClick={handleMenu}>
                <IoMdClose />
              </button>
            </div>
            <div className='mt-6'>
              <Link href={'#'} className='block p-3 m-3 font-medium hover:text-accent hover:bg-gray-100 rounded'>
                Home
              </Link>
              <Link href={'#'} className='block p-3 m-3 font-medium hover:text-accent hover:bg-gray-100 rounded'>
                Features
              </Link>
              <Link href={'#'} className='block p-3 m-3 font-medium hover:text-accent hover:bg-gray-100 rounded'>
                Community
              </Link>
              <Link href={'#'} className='block p-3 m-3 font-medium hover:text-accent hover:bg-gray-100 rounded'>
                Blogs
              </Link>
              <Link href={'#'} className='block p-3 m-3 font-medium hover:text-accent hover:bg-gray-100 rounded'>
                Pricing
              </Link>
            </div>
            <div className='h-[1px] bg-gray-300'></div>
            <button className='mt-6 w-full flex items-center gap-2 hover:bg-gray-100 py-4 px-6 rounded-lg hover:border-accent'>
              Register Now
              <FaArrowRight />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
