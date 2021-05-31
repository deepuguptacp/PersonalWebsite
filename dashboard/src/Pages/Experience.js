import React from "react";
import "./text.css";

function Experience() {
  const HandleSubmit = () => {};
  return (
    <div className="Box">
      <h1>Experience</h1>
      <label htmlFor="">
        Designation :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Organization :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Description :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Location :
        <input type="string" />
      </label>
      <br /> <br />
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
}

export default Experience;
