import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ProjectDetailsContext } from "../../Context/ProjectDetailsContext";
const ProjectDetails = () => {
  const { isModalOpen, currentPost, setModalOpen, setCurrentPost } =
    useContext(ProjectDetailsContext);
  const { projectName } = currentPost;

  if (!isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0  flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ease-in-out ${
        isModalOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#383434] rounded-lg p-6 w-11/12 md:w-1/2 transform transition-transform duration-300 ease-in-out ${
          isModalOpen ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-xl font-bold text-white">{projectName}</h2>
        <button
          onClick={() => {
            setModalOpen(false);
            setCurrentPost({});
          }}
          title="exit fullscreen"
          className="p-2 text-2xl text-white rounded-lg absolute top-4 right-4"
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
