import PropTypes from "prop-types";

const SingleSkill = ({ skill }) => {
  return (
    <div
      className={`bg-gradient-to-bl from-[#181414] to-[#222020] flex flex-col justify-between items-center lg:border border-[#4e4a4a] lg:pt-5 md:pt-5 pt-4 pb-10 lg:w-auto md:w-36 w-36 rounded-full`}
      style={{ height: skill.percentage }}
    >
      <div className=" bg-gradient-to-l to-[#181414] from-[#413d3d] p-7 rounded-full">
        <img className="size-14" src={skill?.icon} alt="" />
      </div>
      <div className="text-center font-bold text-white">
        <h4 className="text-4xl">{skill?.percentage}</h4>
        <h5 className="text-[16px] text-gray-300">{skill?.name}</h5>
      </div>
    </div>
  );
};

export default SingleSkill;

SingleSkill.propTypes = {
  skill: PropTypes.object,
};
