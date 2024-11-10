
import BlogDetails from "./BlogDetails";
import { posts } from "./BlogItems";
import SingleBlog from "./SingleBlog";


const AllBlogs = () => {
    return (
      <div
        id="blog"
        className="text-white flex flex-col items-center "
      >
        <div className="md:container px-5 md:py-16 py-8">
          <div
    
            className="flex justify-center items-center"
          >
           
            <div className="text-white md:text-5xl text-3xl font-bold text-center">
              My Blogs
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {posts.map((post, index) => (
              <SingleBlog key={index + 2} post={post} />
            ))}
          </div>
          <BlogDetails />
        </div>
      </div>
    );
};

export default AllBlogs;