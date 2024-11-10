import { useState } from "react";
import { BlogDetailsContext } from "../Context/BlogDetailsContext";
import PropTypes from "prop-types";
const BlogDetailsProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  return (
    <BlogDetailsContext.Provider
      value={{ isOpen, setIsOpen, currentPost, setCurrentPost }}
    >
      {children}
    </BlogDetailsContext.Provider>
  );
};

export default BlogDetailsProvider;

BlogDetailsProvider.propTypes = {
  children: PropTypes.any,
};
