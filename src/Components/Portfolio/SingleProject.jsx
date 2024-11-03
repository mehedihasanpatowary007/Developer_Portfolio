import PropTypes from 'prop-types';
import { GoArrowUpRight } from 'react-icons/go';


const SingleProject = ({project}) => {
    return (
      <div className="bg-gradient-to-bl from-[#181414] to-[#222020] shadow-lg rounded-md p-5 border border-[#383333] w-[270px] md:w-[320px] flex flex-col gap-4 ">
        <div className="relative group">
          <img
            className="size-[250px] md:size-[300px] rounded-md"
            src={project?.image}
            alt=""
          />
          <div className="absolute top-0 opacity-0 group-hover:opacity-100 duration-300">
            <div className="bg-black bg-opacity-80 md:h-[300px] md:w-[278px] w-[228px] h-[250px] flex items-center justify-center rounded-md">
              <button className="bg-gradient-to-l to-orange-600 from-[#ffac04] font-bold px-4 py-2 rounded-md text-white text-xl">
                See Details
              </button>
            </div>
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
          <h1 className="text-white hover:text-orange-600 duration-500 cursor-pointer md:text-3xl text-2xl md:font-bold font-semibold">
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