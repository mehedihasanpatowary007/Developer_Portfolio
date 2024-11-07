import AllBlogs from "./Components/Blogs/AllBlogs";
import Blogs from "./Components/Blogs/Blogs";
import Contacts from "./Components/Contacts/Contacts";
import ExpertAndEducation from "./Components/Expert&Education/ExpertAndEducation";
import Home from "./Components/Home/Home";
import AllProjects from "./Components/Portfolio/AllProjects";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import ModalInfoProvider from "./Provider/BlogDetailsProvider";
import ProjectDetailsProvider from "./Provider/ProjectDetailsProvider";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <ProjectDetailsProvider>
        <Portfolio />
        <AllProjects/>
      </ProjectDetailsProvider>
      <Skills />
      <ExpertAndEducation />
      <ModalInfoProvider>
        <Blogs />
        <AllBlogs/>
      </ModalInfoProvider>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
