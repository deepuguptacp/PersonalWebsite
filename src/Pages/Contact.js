import React from "react";
import "./text.css";

function Contact() {
  const handleSubmit = () => {
    // event.preventDefault();
    // ... get data form
    // ... submit to API or something
  };
  return (
    <div className="Box">
      <h1>Contact Details</h1>
      <label>
        Gmail :
        <input type="string" />
      </label>
      <br />
      <br />
      <label>
        LinkedIn :
        <input type="string" />
      </label>
      <br />
      <br />
      <label htmlFor="">
        Github :
        <input type="string" />
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Contact;
