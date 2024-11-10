/* eslint-disable react/prop-types */
import { BsArrowsFullscreen } from "react-icons/bs";
import useBlogDetails from "../CustomHook/useBlogDetails";
const SinglePost = ({ post }) => {
  const { title, description, image } = post;
  const { setCurrentPost, setIsOpen } = useBlogDetails()
  return (
    <div
      onClick={() => {
        setCurrentPost(post);
        setIsOpen(true);
      }}
      className="max-w-xs cursor-pointer"
    >
      <div className="group relative  bg-gray-800 rounded-lg border border-gray-700 shadow-md transition-transform duration-300 transform hover:scale-[1.01] p-4">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button title="read more" className="text-5xl text-white">
            <BsArrowsFullscreen />
          </button>
        </div>
        <div className="mt-4">
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
