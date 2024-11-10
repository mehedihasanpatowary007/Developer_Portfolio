import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import { posts } from "./BlogItems";
import SingleBlog from "./SingleBlog";
import Aos from "aos";
import { MdOutlineArrowForwardIos } from "react-icons/md";
Aos.init()

const Blogs = () => {
  return (
    <div
      id="blog"
      className="bg-[#200c14] text-white flex flex-col items-center"
    >
      <div className="md:container px-5 md:py-16 py-8">
        <div
          data-aos="zoom-in-up"
          className="aos-init aos-animate flex flex-col justify-center items-center gap-5"
        >
          <div className="uppercase text-[18px] bg-transparent border-2 border-[#504b4b] py-1.5 px-6 bg-gradient-to-r from-orange-600 to-[#ffac04]  bg-clip-text text-transparent rounded-full font-medium">
            Blogs
          </div>
          <div className="text-white md:text-5xl text-3xl font-bold text-center">
            My Blogs
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="wrapper aos-init aos-animate flex flex-wrap justify-center gap-4 mt-10"
        >
          {posts.slice(0, 3).map((post, index) => (
            <SingleBlog key={index + 1} post={post} />
          ))}
        </div>
        <BlogDetails />
      <Link
        className="text-xl text-white flex justify-end mt-10"
        to={"/all-blog"}
      >
        <div className="flex gap-2 items-center hover:scale-105 duration-300 hover:text-[#ffac04] font-semibold">
          <span>See More</span>
          <span className="">
            <MdOutlineArrowForwardIos />
          </span>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Blogs;
