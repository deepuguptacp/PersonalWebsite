import React from "react";
import "./text.css";

function Skill() {
  const handleSubmit = () => {};
  return (
    <div className="Box">
      <h1>Skills</h1>
      <label htmlFor="">
        Name :
        <input type="string" />
      </label>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Skill;
