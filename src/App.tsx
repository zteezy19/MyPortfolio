import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div id="Home">
        <Home />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
