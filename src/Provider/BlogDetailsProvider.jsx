import { useState } from "react";
import { BlogDetailsContext } from "../Context/BlogDetailsContext";
import PropTypes from "prop-types";
const BlogDetailsProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  console.log(isModalOpen, currentPost);

  const value = {
    isModalOpen,
    setModalOpen,
    currentPost,
    setCurrentPost,
  };
  return (
    <BlogDetailsContext.Provider value={value}>
      {children}
    </BlogDetailsContext.Provider>
  );
};

export default BlogDetailsProvider;

BlogDetailsProvider.propTypes = {
  children: PropTypes.any,
};
