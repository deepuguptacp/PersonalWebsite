import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clock from "react-live-clock";
import Sidebar from "./component/Sidebar";
import About from "./Pages/About";
import Award from "./Pages/Award";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="currentDate" align="right">
          <Clock format={" dddd, Do MMMM YYYY, h:mm:ssa"} ticking={true} />
        </div>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/award" component={Award} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Project} />
          <Route path="/skill" component={Skill} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
