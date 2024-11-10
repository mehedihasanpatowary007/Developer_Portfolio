import PropTypes from "prop-types";

import { ProjectDetailsContext } from "../Context/ProjectDetailsContext";
import { useEffect, useState } from "react";

const ProjectDetailsProvider = ({ children }) => {
     const [isModalOpen, setModalOpen] = useState(false);
     const [currentPost, setCurrentPost] = useState({});
     const [projects, setProjects] = useState([]);

     
     const loadProjects = async () => {
       const response = await fetch("http://localhost:3000/projects");
       const data = await response.json();
       setProjects(data);
     };
     useEffect(() => {
       loadProjects();
     }, []);
  const value = {
    isModalOpen,
    setModalOpen,
    currentPost,
    setCurrentPost, projects,
  };
  return (
    <ProjectDetailsContext.Provider value={value}>
      {children}
    </ProjectDetailsContext.Provider>
  );
};

export default ProjectDetailsProvider;

ProjectDetailsProvider.propTypes = {
  children: PropTypes.any,
};
