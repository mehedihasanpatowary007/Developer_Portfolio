import { FaArrowRight, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import PersonBg from '../../src/assets/Images/person-bg.png'
import Person from '../../src/assets/Images/person.png'
import Star from '../../src/assets/Images/star.png'

const Home = () => {
  return (
    <div
      id="home"
      className="mb-10 flex lg:flex-row flex-col items-center"
    >
      <div className="lg:w-1/2 mt-9 flex flex-col items-center lg:items-start">
        <h1 className="lg:text-6xl text-4xl font-bold text-white">
          I 👋 am Mehedi
        </h1>
        <div className="text-5xl font-bold mt-5 text-gray-500">
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/Ux Designer"],
              autoStart: true,
              loop: true,
              cursorClassName: "text-gray-700 font-thin",
            }}
          />
        </div>
        <p className="mt-7 text-white leading-7">
          Hi, my name is Dalton Grant and I began using WordPress when <br /> it
          first began. I’ve spent most of my waking hours for the last <br />{" "}
          ten years designing, programming and operating WordPress <br /> sites.
        </p>
        <div className="mt-9 flex gap-4 items-center">
          <button className="bg-gradient-to-l to-orange-600 from-[#ffac04]  text-white font-semibold px-8 py-4 rounded-md">
            <a className="flex items-center gap-2" href="#contact">
              <span>Hire Me Now</span>
              <span>
                <FaArrowRight />
              </span>
            </a>
          </button>
          <ul className="flex gap-2 items-center text-xl text-white">
            <li className="bg-[#383434] p-4 rounded-full border-2 border-[#504b4b]">
              <a className="hover:text-orange-700 duration-300" href="">
                <FaFacebook />
              </a>
            </li>
            <li className="bg-[#383434] p-4 rounded-full border-2 border-[#504b4b]">
              <a className="hover:text-orange-700 duration-300" href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="bg-[#383434] p-4 rounded-full border-2 border-[#504b4b]">
              <a className="hover:text-orange-700 duration-300" href="">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 lg:mx-0 mx-4 lg:mt-9 lg:flex lg:justify-end mt-[150px]">
        <div className="relative">
          <img className="h-[500px] w-[490px]" src={PersonBg} alt="person_background" />
          <img
            className="absolute bottom-0 lg:ms-12 ms-5 h-[620px]"
            src={Person}
            alt=""
          />
          <img className="absolute -top-24 left-0  w-32" src={Star} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default Home;
