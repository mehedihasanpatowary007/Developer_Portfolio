import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import AllProjects from "../Components/Portfolio/AllProjects";
import AllBlogs from "../Components/Blogs/AllBlogs";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {  path: "/",element: <HomePage /> },
      {  path: "/all-project" ,element: <AllProjects />},
      { path: "/all-blog" , element: <AllBlogs />,},
    ],
  },
]);
