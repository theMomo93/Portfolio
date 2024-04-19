import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <div className='navbar-bg flex flex-col sm:flex-row sm:h-24 items-center justify-between px-4' style={{ fontFamily: 'Gopher' }}>
      <h1 className='text-4xl sm:text-5xl mx-8 sm:px-8'>Monika Genedl</h1>
      <ul className='flex flex-wrap align-center justify-center flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-4 text-lg sm:text-2xl p-2 sm:p-4'>
        <li className='p-2'>
          <Link className='py-4 px-6 sm:px-12 hover:bg-orange-50 rounded' href="/">
            Home
          </Link>
        </li>
        <li className='p-2'>
          <Link className='py-4 px-6 sm:px-12 hover:bg-orange-50 rounded' href="/about">
            About
          </Link>
        </li>
        <li className='p-2'>
          <Link className='py-4 px-6 sm:px-12 hover:bg-orange-50 rounded' href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      
    </div>
    <hr className='border border-1 border-black border-solid w-11/12 mx-auto'/>
    </>
  );
}
