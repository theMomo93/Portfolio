import Navbar from "@/components/Navbar";
import { Rubik, Roboto } from "next/font/google";
import { useRef } from "react";

const rubik = Rubik({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  function handleClick() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="mx-auto sm:ml-0">
      <div className={rubik.className}>
        <section className="bgHero h-screen flex justify-center items-center">
          <div>
            <div className="flex flex-col items-center h-screen md:p-24 m-4 text-white text-center">
              <h1 className="text-5xl md:text-9xl font-extrabold leading-tight">
                Hello, I'm Monika
              </h1>
              <p className="mt-4 text-lg md:text-xl text-black font-semibold ">Junior Fullstack Web Developer</p>
              <hr className="bg-gray-900 border-none rounded h-1 w-2/4 mx-auto my-2" />
              <p className="mt-8 max-w-md">
                Welcome to my portfolio! I'm passionate about coding and eager
                to learn and grow as a web developer.
              </p>
              <button
                onClick={handleClick}
                className="mt-12 px-8 py-4 bg-sky-700 text-white rounded shadow-xl hover:bg-teal-600 text-2xl transition-all duration-300 ease-in-out hover:px-24 hover:py-12 hover:text-3xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        <hr className=" h-6 bg-gray-300" />
        <section className=" sm:px-6 lg:px-24 bgImage h-fit overflow-y-scroll">
          <Navbar />

          <div
            id="about"
            className="inline-flex items-center justify-center w-full mt-4 sm:mt-12 pt-8"
          >
            <hr className="w-2/3 sm:w-3/4 h-1 my-4 sm:my-8 bg-gray-200 border-0 dark:bg-gray-300" />
            <span className="p-2 absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-gray-800 dark:bg-gray-300 text-black rounded text-3xl sm:text-5xl">
              About me
            </span>
          </div>
          <span className="justify-center flex text-white font-semibold text-xl">
            The how and the why
          </span>
          <div className="mt-4 sm:mt-0 backdrop-blur-md rounded-xl sm:p-0 shadow-2xl ring-1 ring-black/5 sm:m-2 h-auto inline-block max-w-max text-center">
            <div className="w-4/5 my-12 mx-auto text-center text-gray-900 text-sm sm:text-lg lg:text-xl indent-4 sm:indent-8 font-semibold sm:font-light">
              <p >
                I like challenge. I'm not promising I won't make mistakes, but I
                will try my best to prevent them, learn from them, and apologize
                for them.
              </p>
              <hr className="bg-gray-300 border-none rounded h-1 w-64 mx-auto my-2" />
              <p>
                I traveled most of my 20s around Europe for World Rowing
                Competitions, meeting many people different nationalities. Due
                to an injury, I had to switch my path. After working hard and
                climbing the ladder from Housekeeping in a foreign country
                through an associate in a logistics company to a Team Leader at
                Amazon, I found out I had cancer. After fighting it from 2021 to
                2023 and trying to keep myself sane with online Bootcamp, in
                March 2024, I finally managed to finish both of them.
              </p>
              <hr className="bg-gray-300 border-none rounded h-1 w-64 mx-auto my-2" />
              <p className="font-semibold">
                Free of cancer and with a new goal in mind, I am ready to climb
                the ladder again, determined not to fall off it again. The
                journey isn't over yet, but so far, I have learned so much, and
                I want to learn even more in the future. If that doesn't prove
                determination and stubbornness to achieve goals, then I don't
                know what will. Right now, my eyes are set on Full-stack Web
                Development.
              </p>
              <hr className="bg-gray-300 border-none rounded h-1 w-64 mx-auto my-2" />
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
      <hr className=" h-6 bg-gray-300 " />
      <section className="h-screen bg-gray-300">
        <div className="flex flex-col" id="techskills">
          <h1>Tech Skills</h1>
          <ul>
            <li>CSS</li>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>MongoDb</li>
            <li>Node</li>
            <li>Nodemon</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
