import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import portfolioImage from "../images/Aboutus.png";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Ubuntu } from "next/font/google";

// Import the specific Google Font you want to use
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);





  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={ubuntu.className} >
      <button onClick={toggleSidebar} aria-controls="default-sidebar" type="button" className="fixed top-0 left-0 z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg bg-gray-200 ring-2  focus:outline-none focus:ring-2 focus:ring-gray-600 dark:text-teal-900 dark:hover:bg-gray-700 hover:text-white ring-black dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside ref={sidebarRef} id="default-sidebar" className={`fixed top-0 left-0 z-40 w-96 h-screen transition-transform ${isSidebarOpen ? '' : '-translate-x-full'}`} aria-label="Sidebar ">
        <div className="h-full px-4 py-4 overflow-y-auto bg-gray-50 dark:bg-gradient-to-b from-gray-600 to-teal-600 flex flex-col ">
          <Image
            className='my-4 mx-auto rounded-full sm:w-40 sm:h-40 md:w-48 md:h-48 border-solid border-gray-200 border-2 flex justify-center'
            src={portfolioImage}
            alt="applicant's photo"
            width={220} height={220}
          />
          <h1 className='text-gray-100 text-5xl font-semibold  '>Monika Genedl</h1>
          
          <p className='text-gray-100 text-xl flex justify-center mb-10 text-gray-900'>Junior Fullstack Developer</p>

          <h2 className='font-semibold text-2xl text-gray-900 flex align-center justify-center'>I'm looking for... </h2>
          <hr/>
          <ul className='text-gray-100 text-xl flex flex-col  justify-center align-center my-6'>
            <li ><a className='cursor-pointer flex m-1 justify-center bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-700 hover:text-gray-100 p-2'  href="#about">About</a></li>
            <li ><a className='cursor-pointer flex m-1 justify-center bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-700 hover:text-gray-100 p-2' href="#techskills">Tech Skills</a></li>
            <li ><a className='cursor-pointer flex m-1 justify-center bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-700 hover:text-gray-100 p-2' href="#sofskills">Soft Skills</a></li>

            <li ><a className='cursor-pointer flex m-1 justify-center bg-gray-100 text-black font-semibold rounded-full hover:bg-gray-700 hover:text-gray-100 p-2' href="#work">Portfolio</a></li>
            
          </ul>
          <div className='text-gray-200'>
            <h1 className='font-semibold text-2xl text-gray-900 flex justify-center'> Contact me!</h1>
            <hr className='divide-dotted'/>
            <div className='my-4'>
              <p className='text-xl'><span className='font-semibold text-gray-900'>Telephone:</span> 01783090202 </p>
              <p className='text-xl'><span className='font-semibold text-gray-900'>Email:</span> mkaminska93@gmail.com</p>
            </div>
            <div className='flex'>
              <a href="https://www.linkedin.com/in/monika-genedl-2934611b2/" target="_blank" rel="noopener noreferrer">
                <LiaLinkedin className='text-7xl m-4 p-2 hover:bg-blue-700 rounded-full'/>
              </a>
              <a href="https://github.com/theMomo93" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-7xl m-4 p-2 hover:bg-black rounded-full' />
              </a>
              <a href="https://www.instagram.com/mknika21/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-7xl m-4 p-2 hover:bg-gradient-to-r from-yellow-500 via-red-500 to-blue-600 rounded-full' />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
