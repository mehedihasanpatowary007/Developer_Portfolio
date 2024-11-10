import  { useContext } from 'react';
import { BlogDetailsContext } from '../../Context/BlogDetailsContext';
const useBlogDetails = () => {
    return (
        useContext(BlogDetailsContext)
    );
};

export default useBlogDetails;