import React from "react";
import "./text.css";

function Project() {
  const handleSubmit = () => {};
  return (
    <div className="Box">
      <h1>Projects</h1>
      <label htmlFor="">
        Name :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Website Link :
        <input type="link" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Github Link :
        <input type="link" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Starting Date :
        <input type="date" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Ending Date :
        <input type="date" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Description :
        <input type="string" />
      </label>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Project;
