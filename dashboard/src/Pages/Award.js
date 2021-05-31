import React from "react";
import "./text.css";
function Award() {
  const handleSubmit = () => {
    // event.preventDefault();
    // ... get data form
    // ... submit to API or something
  };
  return (
    <div className="Box">
      <h1>Awards</h1>
      <label>
        Name of the Award :
        <input type="string" />
      </label>
      <br />
      <br />
      <label>
        Name of the Organization :
        <input type="string" />
      </label>
      <br />
      <br />
      <label>
        Description :
        <input type="string" />
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Award;
