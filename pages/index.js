import Navbar from "@/components/Navbar";
import Image from "next/image";
import myImage from "../images/Aboutus.png";
import StarRating from "@/components/StarRating";

const technicalSkills = [
  { name: 'HTML5', rating: 5 },
  { name: 'CSS', rating: 5 },
  { name: 'JavaScript', rating: 4 },
  { name: 'React', rating: 4 },
  { name: 'Next.js', rating: 4 },
  { name: 'Express.js', rating: 4 },
  { name: 'Databases', rating: 4 },
  { name: 'Nodemon', rating: 4 },
  { name: 'Node', rating: 4 },
  { name: 'Tailwind', rating: 5 },
  { name: 'Bootstrap', rating: 5 },
  { name: 'API', rating: 5 },
];
const softSkills = [
  { name: 'Leadership', rating: 4 },
  { name: 'Communication', rating: 5 },
  { name: 'Adaptability', rating: 5 },
  { name: 'Flexibility', rating: 5 },
  { name: 'Teamwork', rating: 5 },
  { name: 'Problem Solving', rating: 5 },
];
export default function Home() {
  return (
    <div className="hero-bg mx-auto sm:ml-0" style={{ fontFamily: "Gopher" }}>
      <Navbar />

      <section className="h-screen flex flex-col lg:flex-row justify-center items-center">
  <div className="flex-1 flex flex-col justify-center items-start m-6 lg:m-12 p-4 text-center lg:text-left">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-normal mb-6 lg:mb-12">
      Welcome to my Portfolio
    </h1>
    <p className="leading-6 tracking-wide text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
      Junior Fullstack Developer
    </p>
    <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8">
      I like to create scalable and solid websites with great user
      experience. I invite you to explore more about me and my skills.
    </p>
    <button className="button-text text-lg sm:text-xl lg:text-2xl bg-black py-3 sm:py-4 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-full my-4 lg:my-8 hover:text-black hover:bg-orange-50">
      EXPLORE
    </button>
  </div>

  <div className="flex-1 flex justify-center items-center m-4 lg:m-12">
    <Image src={myImage} width={500} height={450} />
  </div>
</section>

      <section className="bg-gray-50 min-h-screen flex flex-col justify-start items-center py-8 sm:py-16">
  <h1 className="text-4xl sm:text-6xl font-medium leading-normal my-4 sm:my-12">
    Welcome to my Skills Zone
  </h1>
  <div className="flex flex-col sm:flex-row flex-1 w-full max-w-screen-lg">
    <div className="flex flex-col justify-center mx-4 sm:mx-12 my-4 sm:my-0 w-full p-4">
      <h2 className="text-3xl sm:text-4xl tracking-widest underline mb-4">Technical Skills</h2>
      <ul className="my-2 text-lg sm:text-2xl grid-list ">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="mb-2 ">
            <StarRating skill={skill} />
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col justify-center mx-4 sm:mx-12 my-4 sm:my-0 w-full p-4">
      <h2 className="text-3xl sm:text-4xl tracking-widest underline mb-4">Soft Skills</h2>
      <ul className="my-2 text-lg sm:text-2xl ">
        {softSkills.map((skill, index) => (
          <li key={index} className="mb-2 mr-4">
            <StarRating skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="text-lg sm:text-xl">
    <p>lorem ipsum</p>
  </div>
</section>
<section>
  
</section>

   
    </div>
  );
}
