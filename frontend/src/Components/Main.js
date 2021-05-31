import React from "react";
import Homepage from "../Components/Pages/Homepage";
import About from "../Components/Pages/About";
import Experience from "../Components/Pages/Experience";
import Award from "../Components/Pages/Award";

const Main = () => {
  return (
    <div className="content">
      <Homepage />
      <About />
      <Experience />
      <Award />
    </div>
  );
};

export default Main;
