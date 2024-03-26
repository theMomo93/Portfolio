import Navbar from "@/components/Navbar";
import { Rubik } from "next/font/google";
import { useRef } from "react";

const rubik = Rubik({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  
  const aboutRef = useRef(null);


  return(
<div className="mx-auto sm:ml-0">
      
      <div className={rubik.className}>
    
      <section className=" sm:px-6 lg:px-24 bgImage h-fit w-screen "> 
             
            <Navbar />
           
            
          
          <div className="inline-flex items-center justify-center w-full mt-4 sm:mt-12">
            <hr className="w-2/3 sm:w-3/4 h-1 my-4 sm:my-8 bg-orange-200 border-0 dark:bg-gray-300" />
            <span 
             id="about"
             className="p-2 absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-gray-800 dark:bg-gray-300 text-black rounded text-3xl sm:text-5xl bg-opacity-60">
              About me
            </span>
          </div>
<span className="justify-center flex text-white font-semibold text-xl">The how and the why</span>
          <div className="mt-4 sm:mt- backdrop-blur-xl p-6 sm:p-12 rounded-xl p-4 sm:p-8 shadow-2xl ring-1 ring-black/5 sm:m-2 h-auto">
  <div
    className="mx-36 text-gray-200 text-sm sm:text-lg lg:text-xl indent-4 sm:indent-8 font-semibold sm:font-light"
    
  >
              <p>
                I like challenge. I'm not promising I won't make mistakes, but I
                will try my best to prevent them, learn from them, and apologize
                for them. I am eager to learn more about coding. I know that
                with a little time and a chance, I will be a valuable employee.
              </p>
              <hr className="bg-gray-900 border-none rounded h-1 w-64 mx-auto my-2" />
              <p>
                My career had ups and downs. I traveled most of my 20s around
                Europe for World Rowing Competitions, meeting many different
                people and experiencing foreign languages and countries. From a
                world athlete, due to an injury, I had to switch my path. After
                working hard and climbing the ladder from Housekeeping in a
                foreign country through an associate in a logistics company to a
                Team Leader at Amazon, I found out I had cancer. After fighting
                it from 2021 to 2023 and trying to keep myself sane with online
                Bootcamp, in March 2024, I finally managed to finish both of
                them.
              </p>
              <hr className="bg-gray-900 border-none rounded h-1 w-64 mx-auto my-2" />
              <p>
                Free of cancer and with a new goal in mind, I am ready to climb
                the ladder again, determined not to fall off it again. The
                journey isn't over yet, but so far, I have learned so much, and
                I want to learn even more in the future. If that doesn't prove
                determination and stubbornness to achieve goals, then I don't
                know what will. Right now, my eyes are set on Full-stack Web
                Development.
              </p>
              <hr className="bg-gray-900 border-none rounded h-1 w-64 mx-auto my-2" />
              <p>
                I enjoy meeting new people from different backgrounds. Working
                in development gives me the opportunity to create as well as
                solve complex issues. The flexibility with a hybrid job is also
                a big plus. I know I am going to be a great addition to your
                company, and if you are still reading this, so do you.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="h-screen bg-gray-300">
        <div
        
        id="techskills">
        <h1>Tech Skills</h1>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </div>
      </section>
    </div>
  );
}
