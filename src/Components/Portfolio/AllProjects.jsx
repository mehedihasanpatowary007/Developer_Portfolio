import { useContext } from "react";
import { ProjectDetailsContext } from "../../Context/ProjectDetailsContext";
import SingleProject from "./SingleProject";
import ProjectDetails from "./ProjectDetails";

const AllProjects = () => {
    const {projects} = useContext(ProjectDetailsContext)
    return (
      <div className="md:py-16 py-8 md:container mx-auto px-3" id="portfolio">
        <div
          className="flex flex-col justify-center items-center"
        >
          <div className="text-white md:text-5xl text-3xl font-bold text-center">
            My Recent Work
          </div>
        </div>
        <div
          
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          {projects?.map((project,index) => {
            return (
              <SingleProject key={index + 3} project={project} />
            );
          })}
        </div>
        <ProjectDetails />
      </div>
    );
};

export default AllProjects;