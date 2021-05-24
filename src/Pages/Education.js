import React from "react";
import "./text.css";

function Education() {
  const handleSubmit = () => {};

  return (
    <div className="Box">
      <h1>Education</h1>
      <label htmlFor="">
        Degree :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Organization :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Date :
        <input type="date" />
      </label>
      <br /> <br />
      <label htmlFor="">
        CGPA :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Branch :
        <input type="string" />
      </label>
      <br /> <br />
      <label htmlFor="">
        Location :
        <input type="string" />
      </label>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Education;
