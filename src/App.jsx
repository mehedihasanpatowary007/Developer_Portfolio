import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Router";
import BlogDetailsProvider from "./Provider/BlogDetailsProvider";
import ProjectDetailsProvider from "./Provider/ProjectDetailsProvider";


function App() {
  return (
    <>
      <BlogDetailsProvider>
        <ProjectDetailsProvider>
          <RouterProvider router={routes} />
        </ProjectDetailsProvider>
      </BlogDetailsProvider>
    </>
  );
}

export default App;
