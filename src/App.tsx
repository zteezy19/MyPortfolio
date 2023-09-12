import React from "react";
import "./App.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
