import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
  return (
    <>
    <hr className='border border-1 border-black border-solid w-4/5 mx-auto'/>
<div className="flex flex-col md:flex-row items-center justify-center border-blue-gray-50 py-8 ">

      <div
        variant="small"
        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 md:text-left md:pl-4"
      >
        &copy; 2024 <a href="https://material-tailwind.com/">Portfolio Genedl</a>. All
        Rights Reserved.
      </div>
     
      <div id="contact" className="flex gap-4 text text-blue-gray-900 md:justify-center md:pl-4">
        
        <a className='text-4xl p-3 text-white bg-gradient-to-t from-purple-600 via-pink-500 to-yellow-500 rounded-full' href='https://www.instagram.com/mknika21/'><FaInstagram /></a>
        <a className='text-4xl p-3 bg-blue-400 rounded-full text-white ' href='https://www.linkedin.com/in/monikagenedl/'><CiLinkedin/></a>
        <a className='text-4xl p-3 text-white bg-black rounded-full' href='https://github.com/theMomo93'><LuGithub /></a>
              
            </div>
          </div>
       
        </>
  );
}