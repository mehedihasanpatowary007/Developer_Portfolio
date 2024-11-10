import { useContext } from "react";
import { ProjectDetailsContext } from "../../Context/ProjectDetailsContext";


const useProjectDetails = () => {
    return (
        useContext(ProjectDetailsContext)
    );
};

export default useProjectDetails;