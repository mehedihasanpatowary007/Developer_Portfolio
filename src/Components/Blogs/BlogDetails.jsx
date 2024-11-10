import { AiOutlineFullscreenExit } from "react-icons/ai";
import useBlogDetails from "../CustomHook/useBlogDetails";
const BlogDetails = () => {
  const { isOpen, setIsOpen, currentPost,setCurrentPost } =
    useBlogDetails();
  const { title, description } = currentPost;

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0  flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#383434] rounded-lg p-6 w-11/12 md:w-1/2 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-gray-300">{description}</p>
        <button
          onClick={()=> {
            setIsOpen(false)
            setCurrentPost({})
          }}
          title="exit fullscreen"
          className="p-2 text-2xl text-white rounded-lg absolute top-4 right-4"
        >
          <AiOutlineFullscreenExit />
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;

