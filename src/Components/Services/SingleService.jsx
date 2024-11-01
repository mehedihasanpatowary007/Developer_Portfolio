import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
const SingleService = ({ service }) => {
  console.log(service);
  return (
    <div className="flex flex-col items-start gap-8 bg-[#181414] border border-[#3f3737] px-8 py-14 rounded-3xl hover:border-lime-100 duration-500">
      <img className="size-16" src={service?.icon} alt="" />
      <h1 className="text-white font-bold text-2xl">{service?.name}</h1>
      <p className="text-gray-300 leading-8 pe-9">{service?.desc}</p>
      <button className="flex items-center flex-row-reverse text-white text-[18px] gap-4 font-bold">
        <span>
          <FaArrowRightLong />
        </span>
        <span>Read More</span>
      </button>
    </div>
  );
};

export default SingleService;
SingleService.propTypes = {
  service: PropTypes.object,
};
