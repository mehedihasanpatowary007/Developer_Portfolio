import Blogs from "../Components/Blogs/Blogs";
import Contacts from "../Components/Contacts/Contacts";
import ExpertAndEducation from "../Components/Expert&Education/ExpertAndEducation";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <Portfolio />
      <Skills />
      <ExpertAndEducation />
      <Blogs />
      <Contacts />
    </>
  );
};

export default HomePage;
