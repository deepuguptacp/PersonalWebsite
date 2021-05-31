import React from "react";
import "./text.css";

function About() {
  const handleSubmit = () => {
    // event.preventDefault();
    // ... get data form
    // ... submit to API or something
  };
  return (
    <div className="Box">
      <h1>About</h1>
      <label>
        Enter your description :
        <input type="string" />
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default About;
