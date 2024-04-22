import React from "react";
import Image from "next/image";
import PortGermany from "../images/Port-Germany.png";
import HackerNews from "../images/Hacker-New Imitation.png";
import SimonSays from "../images/Simon-Says.png";
import MiniGame from "../images/mini-game.png";
import MockPetAdoption from "../images/adoption.png";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center flex-1">
      <div className="bg-gray-100 rounded my-8 mx-8 flex flex-col justify-between shadow-2xl transition-all duration-700 hover:scale-110">
        <h1 className="mx-2 text-3xl flex justify-center my-4 underline underline-offset-2 font-semibold">
          Community Forum 2024
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-8">
          <Image
            className="rounded-xl object-cover"
            width={450}
            height={350}
            src={PortGermany}
            alt="Avatar"
          />

          <div class="px-6 py-4 ">
            <div className="font-bold text-xl mb-4">
              Immigration - Port Germany
            </div>
            <p className="text-gray-700 text-base mb-2">
              A dynamic Forum and with comments and replies. Final Project for
              WBS School. Goal was to try and solve a real life issue.
              <span className="font-semibold text-black underline underline-offset-2">
                {" "}
                Tools :{" "}
              </span>
              Next.js, Tailwind, MongoDB, Express.js, Nodejs, JavaScript, HTML,
              CSS, GitHub, Vercel
            </p>
          
          <a
            href="https://immigration-port-germany-n9w43l9mm-momos-projects-c74af16f.vercel.app/"
            target="_blank"
            className="hero-bg text-black rounded group py-2 px-4 font-semibold mt-0 hover:bg-black hover:text-orange-100"
          >
            EXPLORE
          </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded my-8 mx-8 flex flex-col justify-between shadow-2xl transition-all duration-700 hover:scale-110">
        <h1 className="mx-2 text-3xl flex justify-center my-4 underline underline-offset-2 font-semibold">
          Mockup HackerNews 2023
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-8 ">
          <Image
            className="rounded-xl object-cover "
            width={450}
            height={350}
            src={HackerNews}
            alt="Avatar"
          />
          <div class="px-6 py-4">
            <div className="font-bold text-xl mb-4">Project Mockup 2023</div>
            <p className="text-gray-700 text-base mb-2">
              Project needed to be complete in 6h, group of two people. Goal was
              t recreate the Hacker News page as much as possible.
              <span className="font-semibold text-black underline underline-offset-2">
                {" "}
                Tools :{" "}
              </span>
              JavaScript, React, HTML, CSS, Tailwind, GitHub, Vercel
            </p>
            <a
              href="https://hacker-news-imitation.vercel.app/"
              target="_blank"
              className="hero-bg text-black rounded group  py-2 px-4  mb-4 font-semibold hover:bg-black hover:text-orange-100"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded my-8 mx-8 flex flex-col justify-between shadow-2xl transition-all duration-700 hover:scale-110">
        <h1 className="mx-2 text-3xl flex justify-center my-4 underline underline-offset-2 font-semibold">
          Dummy PetAdoption 2023
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-8 ">
          <Image
            className="rounded-xl object-cover "
            width={450}
            height={350}
            src={MockPetAdoption}
            alt="Avatar"
          />
          <div class="px-6 py-4">
            <div className="font-bold text-xl mb-4">Dummy PetAdoption 2023</div>
            <p className="text-gray-700 text-base mb-2">
              Personal project, to make families connect with pets for adoption.
              Here we match our adorable house pets with people to create
              beautiful relationships lasting a lifetime.
              <span className="font-semibold text-black underline underline-offset-2">
                {" "}
                Tools :{" "}
              </span>
              JavaScript, HTML, CSS, Tailwind, Bootstrap5, React, GitHub, Vercel
            </p>
            <a
              href="https://mock-pet-adoption-project.vercel.app/"
              target="_blank"
              className="hero-bg text-black rounded group py-2 px-4  mb-4 font-semibold hover:bg-black hover:text-orange-100"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded my-8 mx-8 flex flex-col justify-between shadow-2xl transition-all duration-700 hover:scale-110">
        <h1 className="mx-2 text-3xl flex justify-center my-4 underline underline-offset-2 font-semibold">
          Mini Roleplay Game 2024
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-8 ">
          <Image
            className="rounded-xl object-cover "
            width={450}
            height={350}
            src={MiniGame}
            alt="Avatar"
          />
          <div class="px-6 py-4">
            <div className="font-bold text-xl mb-4">Perish the Dragon</div>
            <p className="text-gray-700 text-base mb-2">
              Created to better understand and practice JavaScript. A role
              playing game, where to win you have to defeat a dragon
              <span className="font-semibold text-black underline underline-offset-2">
                {" "}
                Tools:{" "}
              </span>
              JavaScript, HTML, CSS, DOM, GitHub, Vercel
            </p>
            <a
              href="https://mini-game-iota.vercel.app/"
              target="_blank"
              className="hero-bg text-black rounded group py-2 px-4  mb-4 font-semibold hover:bg-black hover:text-orange-100"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded my-8 mx-8 flex flex-col justify-between shadow-2xl transition-all duration-700 hover:scale-110">
        <h1 className="mx-2 text-3xl flex justify-center my-4 underline underline-offset-2 font-semibold">
          Simon Says game 2022
        </h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 my-8 ">
          <Image
            className="rounded-xl object-cover "
            width={450}
            height={350}
            src={SimonSays}
            alt="Avatar"
          />
          <div class="px-6 py-4">
            <div className="font-bold text-xl mb-4">
              Simon Says -repeat after me!
            </div>
            <p className="mb-2 text-gray-700 text-base mb-2">
              There is no better to understand DOM, JavaScript and how to
              utilize classes than to practice it by making small games! Its
              about learning and enjoying what you do!
              <span className="font-semibold text-black underline underline-offset-2">
                {" "}
                Tools:{" "}
              </span>
              HTML, CSS, JavaScript, DOM, GitHub, Vercel
            </p>
            <a
              href="https://simon-says-two.vercel.app/"
              target="_blank"
              className="hero-bg text-black rounded group py-2 px-4  my-4 font-semibold hover:bg-black hover:text-orange-100"
            >
              EXPLORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
