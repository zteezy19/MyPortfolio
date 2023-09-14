import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="AboutMe">
        <AboutMe />
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
