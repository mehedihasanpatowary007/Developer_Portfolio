import PropTypes from 'prop-types';
import { GoArrowUpRight } from 'react-icons/go';
const SingleProject = ({project}) => {
    return (
      <div className=" bg-gradient-to-bl from-[#181414] to-[#222020] shadow-lg rounded-3xl p-5 border border-[#383333] w-[340px] flex flex-col gap-4 ">
        <div className="transition-transform transform hover:scale-105 hover:-rotate-2 duration-500 ">
          <img
            className="size-[300px] rounded-3xl"
            src={project?.image}
            alt=""
          />
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
          <h1 className="text-white hover:text-orange-600 duration-500 cursor-pointer md:text-3xl text-2xl md:font-bold font-semibold">{project?.projectName}</h1>
        </div>
      </div>
    );
};

export default SingleProject;

SingleProject.propTypes = {
    project:PropTypes.object
}