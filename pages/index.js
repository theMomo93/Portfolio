import Navbar from "@/components/Navbar";
import Image from "next/image";
import myImage from "../images/Aboutus.png";
import StarRating from "@/components/StarRating";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Link from "next/link";

const technicalSkills = [
  { name: "HTML5", rating: 5 },
  { name: "CSS", rating: 5 },
  { name: "JavaScript", rating: 4 },
  { name: "React", rating: 4 },
  { name: "Next.js", rating: 4 },
  { name: "Express.js", rating: 4 },
  { name: "Databases", rating: 4 },
  { name: "Nodemon", rating: 4 },
  { name: "Node", rating: 4 },
  { name: "Tailwind", rating: 5 },
  { name: "Bootstrap", rating: 5 },
  { name: "API", rating: 5 },
];
const softSkills = [
  { name: "Leadership", rating: 4 },
  { name: "Communication", rating: 5 },
  { name: "Adaptability", rating: 5 },
  { name: "Flexibility", rating: 5 },
  { name: "Teamwork", rating: 5 },
  { name: "Problem Solving", rating: 5 },
];

export default function Home() {
  return (
    <div className="hero-bg mx-auto sm:ml-0" style={{ fontFamily: "Gopher" }}>
      <Navbar />
    

      <section id="home" className="min-h-screen flex flex-col lg:flex-row justify-center items-center  overflow-hidden">
  <div className="flex-1 flex flex-col justify-center items-center lg:items-start m-6 lg:m-12 p-4 text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-normal mb-6 lg:mb-12">
      Welcome to my Portfolio
    </h1>
    <span className="circle one shadow-xl"></span>
    <span className="circle two shadow-xl"></span>
    <span className="circle three shadow-xl"></span>
    <span className="circle four shadow-xl"></span>
    <span className="circle five shadow-xl"></span>
    <span className="circle six shadow-xl"></span>
    <p className="leading-6 tracking-wide text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
      Junior Fullstack Developer
    </p>
    <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
      I like to create scalable and solid websites with great user experience.
      I strive to learn something new every day. I invite you to explore more about me and my
      skills.
    </p>
   
    <Link href="#explore">
    <button className="button-text text-lg sm:text-xl lg:text-2xl bg-black py-3 sm:py-4 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full my-4 lg:my-8 hover:text-black hover:bg-orange-50">
      EXPLORE
    </button>
</Link>
  </div>

  <div className="myImageContainer flex-1 flex justify-center items-center m-4 lg:m-12">
  
    <Image
      className="myImage -mb-12"
      src={myImage}
      width={650}
      height={550}
      alt="picture of a web developer"
    />

  </div>
  
</section>

<hr className='border border-1 border-black border-solid w-11/12 mx-auto'/>

<section className="bg-gray-50 min-h-screen flex flex-col justify-start items-center py-8 sm:py-16  outline-offset-1 outline-4">
 
  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-normal mb-6 lg:mb-12 text-center">
    Welcome to my Skills Zone
  </h1>

  <div className="flex flex-col sm:flex-row w-full max-w-screen-lg">
    <div className="flex flex-col justify-center sm:mx-4 sm:my-0 w-full sm:w-1/2 p-4 sm:mr-4 mb-8 sm:mb-0 hero-bg rounded shadow-2xl">
      <h2 className="text-3xl sm:text-4xl tracking-widest underline mb-4 text-center font-semibold">
        Technical Skills
      </h2>
      <ul className="my-2 text-lg sm:text-2xl grid-list">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="mb-2">
            <StarRating skill={skill} />
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col justify-center  sm:mx-4 sm:my-0 w-full sm:w-1/2 p-4 sm:ml-4 hero-bg rounded shadow-2xl">
      <h2 className="text-3xl sm:text-4xl tracking-widest underline mb-4 text-center font-semibold">
        Soft Skills
      </h2>
     
      <ul className="my-2 text-lg sm:text-2xl ">
        {softSkills.map((skill, index) => (
          <li key={index} className="mb-2">
            <StarRating skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

<hr className='border border-1 border-black border-solid w-11/12 mx-auto'/>

      <section id="explore">
        <div className="p-12 m-8">
          <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-medium leading-normal mb-6 lg:mb-12">
            {" "}
            My Projects
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
            During my Bootcamp we had hands-on experiences and created many
            interesting Projects.{" "}
          </p>
        </div>

        <Card />
      </section>
      <Footer />
    </div>
  );
}
