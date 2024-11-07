import PropTypes from "prop-types";
const SingleEducation = ({ education }) => {
  return (
    <div className="bg-[#282424] border border-[#3d3b3b] rounded-lg">
      <div className="border-b border-[#3d3b3b] flex xl:flex-row flex-col gap-5 justify-between xl:items-center md:p-8 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="md:text-2xl text-base font-bold text-white">
            {education?.name}
          </h1>
          <h5 className="text-gray-300 md:text-xl text-xs">
            {education?.instituteAndLocation}
          </h5>
        </div>
        <h2 className="text-white bg-gradient-to-l to-orange-600 from-[#ffac04] py-3 md:px-6 px-4 rounded-full md:text-[18px] text-xs font-semibold text-center">
          {education?.period}
        </h2>
      </div>
      <div className="md:p-8 p-4 text-justify">
        <p className="text-gray-300">{education?.desc}</p>
      </div>
    </div>
  );
};

export default SingleEducation;

SingleEducation.propTypes = {
  education: PropTypes.object,
};
