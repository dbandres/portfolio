import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LinksSocials from "./components/LinksSocial";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


function App() {
  return (
    <div >
       <NavBar/>
       <Home/>
       
       <About/>
       <Portfolio/>
       <Skills/>
       <Contact/>
  <LinksSocials/>
    </div>
  );
}

export default App;
