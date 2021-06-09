import React from "react";
import Homepage from "../Components/Pages/Homepage";
import About from "../Components/Pages/About";
import Experience from "../Components/Pages/Experience";
// import Award from "../Components/Pages/Award";
import Education from "../Components/Pages/Education";
import Skill from "../Components/Pages/Skills";
import Contact from "../Components/Pages/Contact";
import Project from "../Components/Pages/Project";

const Main = () => {
  return (
    <div className="content">
      <div id="main-page">
        <Homepage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="skill">
        <Skill />
      </div>
      {/* <Award /> */}
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
