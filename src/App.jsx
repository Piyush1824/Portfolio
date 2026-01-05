import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'  
import AboutMe from './components/AboutMe.jsx'  
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'  
import Contact from './components/Contact.jsx'



function App() {

  return (
    <>
     <Navbar /> 
     <HeroSection />
     <AboutMe />
     <Projects />
     <Services /> 
     <Contact />
    </>
  )
}

export default App
