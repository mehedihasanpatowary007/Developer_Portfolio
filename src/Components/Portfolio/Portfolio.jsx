import { useContext } from "react";
import SingleProject from "./SingleProject";
import ProjectDetails from "./ProjectDetails";
import { ProjectDetailsContext } from "../../Context/ProjectDetailsContext";
import Aos from "aos";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
Aos.init()

const Portfolio = () => {
  const {projects} = useContext(ProjectDetailsContext)
  return (
    <div className="md:py-16 py-8 md:container mx-auto px-3" id="portfolio">
      <div
        data-aos="zoom-in-up"
        className="aos-init aos-animate flex flex-col justify-center items-center gap-5"
      >
        <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
          Portfolio
        </div>
        <div className="text-white md:text-5xl text-3xl font-bold text-center">
          My Recent Work
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="wrapper aos-init aos-animate flex flex-wrap justify-center gap-5 mt-10"
      >
        {projects.slice(0, 3)?.map((project, index) => {
          return <SingleProject key={index + 4} project={project} />;
        })}
      </div>
      <ProjectDetails />
      <Link
        className="text-xl text-white flex justify-end mt-10"
        to={"/all-project"}
      >
        <div className="flex gap-2 items-center hover:scale-105 duration-300 hover:text-[#ffac04] font-semibold">
          <span>See More</span>
          <span className="">
            <MdOutlineArrowForwardIos />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Portfolio;
