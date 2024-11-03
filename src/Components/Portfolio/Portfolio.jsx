import { useEffect } from "react";
import { useState } from "react";
import SingleProject from "./SIngleProject";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const loadProjects = async () => {
    const response = await fetch("http://localhost:3000/projects");
    const data = await response.json();
    setProjects(data);
  };
  useEffect(()=>{
    loadProjects()
  },[])
  return (
    <div className="py-32 md:container mx-auto px-3" id="portfolio">
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
        className="aos-init aos-animate flex flex-wrap justify-center gap-5 mt-10"
      >
        {projects?.map((project) => {
          return <SingleProject key={project?.projectName} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
