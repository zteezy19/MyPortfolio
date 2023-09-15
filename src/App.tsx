import React from "react";

import "font-awesome/css/font-awesome.min.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="Home">
        <Home />
      </div>
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default App;
