import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { ProjectDetailsContext } from '../../Context/ProjectDetailsContext';


const SingleProject = ({project}) => {
  const { setCurrentPost, setModalOpen } = useContext(ProjectDetailsContext);
    return (
      <div className="relative group bg-gradient-to-bl from-[#181414] to-[#222020] shadow-lg rounded-md p-5 border border-[#383333] w-[270px] md:w-[370px] flex flex-col">
        <div className="">
          <img
            className="size-[250px] md:size-[350px] rounded-md"
            src={project?.image}
            alt=""
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 bg-black bg-opacity-80 flex items-center justify-center rounded-md">
            <button onClick={()=>{
              setCurrentPost(project)
              setModalOpen(true)
            }} className="bg-gradient-to-l to-orange-600 from-[#ffac04] font-bold px-4 py-2 rounded-md text-white text-xl">
              See Details
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <ul className="flex gap-3 items-center justify-center">
              {project?.category.map((singleCategory) => {
                return (
                  <li
                    className="bg-[#181414] border border-[#353131] text-[#8f8888] px-3 py-0.5 rounded-full"
                    key={singleCategory}
                  >
                    {singleCategory}
                  </li>
                );
              })}
            </ul>
            <button className="text-white bg-gradient-to-l to-orange-500 from-[#ffac04] p-2 rounded-full text-2xl">
              <GoArrowUpRight />
            </button>
          </div>
          <h1 className="text-white hover:text-orange-600 duration-500 cursor-pointer md:text-2xl text-xl md:font-bold font-semibold">
            {project?.projectName}
          </h1>
        </div>
      </div>
    );
};

export default SingleProject;

SingleProject.propTypes = {
    project:PropTypes.object
}