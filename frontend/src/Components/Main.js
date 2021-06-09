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
      <Homepage />
      <About />
      <Experience />
      <Project />
      <Skill />
      {/* <Award /> */}
      <Education />
      <Contact />
    </div>
  );
};

export default Main;
