import Contacts from "./Components/Contacts/Contacts"
import ExpertAndEducation from "./Components/Expert&Education/ExpertAndEducation"
import Home from "./Components/Home/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Services/Services"
import Skills from "./Components/Skills/Skills"
import Footer from "./Layout/Footer/Footer"
import Navbar from "./Layout/Navbar/Navbar"


function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <ExpertAndEducation/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App
