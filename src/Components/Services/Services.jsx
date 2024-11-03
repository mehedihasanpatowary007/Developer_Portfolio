import ServicesImg from "../../assets/Images/services.webp";
import { FaSearch } from "react-icons/fa";
import Aos from "aos";
Aos.init();

const Services = () => {
  return (
    <div className="bg-[#180c14] py-32 " id="services">
      <div
        data-aos="zoom-in-up"
        className="aos-init aos-animate flex flex-col justify-center items-center gap-5"
      >
        <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
          Services
        </div>
        <div className="text-white md:text-5xl text-3xl font-bold text-center">
          Our services
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="aos-init aos-animate relative flex justify-center items-center group mt-14"
      >
        <div className="transition-transform transform hover:scale-105 z-30 duration-500 shadow">
          <img
            className="bg-[#282424] h-48 w-60 hidden group-hover:block rounded-lg"
            src={ServicesImg}
            alt=""
          />
          <h2 className="relative bg-[#282424] h-48 w-60 group-hover:hidden rounded-lg">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text- text-3xl font-bold uppercase">
              Services
            </span>
          </h2>
        </div>
        <div className=" absolute bg-[#282424] translate-x-0 group-hover:-translate-x-[110%] h-48 w-60 rounded-lg shadow-md group-hover:shadow-none shadow-gray-800 duration-500 flex flex-col gap-4 justify-center items-center text-white font-bold text-2xl hover:scale-105 cursor-pointer">
          <span>
            <FaSearch />
          </span>
          <span>Search</span>
        </div>
        <div className=" absolute bg-[#282424] translate-x-0 group-hover:-translate-x-[220%] h-48 w-60 rounded-lg shadow-md group-hover:shadow-none shadow-gray-800 duration-500 flex flex-col gap-4 justify-center items-center text-white font-bold text-2xl hover:scale-105 cursor-pointer">
          <span>
            <FaSearch />
          </span>
          <span>Search</span>
        </div>
        <div className=" absolute bg-[#282424] translate-x-0 group-hover:translate-x-[110%] h-48 w-60 rounded-lg shadow-md group-hover:shadow-none shadow-gray-800 duration-500 flex flex-col gap-4 justify-center items-center text-white font-bold text-2xl hover:scale-105 cursor-pointer">
          <span>
            <FaSearch />
          </span>
          <span>Search</span>
        </div>
        <div className=" absolute bg-[#282424] translate-x-0 group-hover:translate-x-[220%] h-48 w-60 rounded-lg shadow-md group-hover:shadow-none shadow-gray-800 duration-500 flex flex-col gap-4 justify-center items-center text-white font-bold text-2xl hover:scale-105 cursor-pointer">
          <span>
            <FaSearch />
          </span>
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
