import React, { useState } from "react";
import "./text.css";

function About() {
  const [About, setAbout] = useState({
    description: "",
  });
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const { description } = About;
    const res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Description Push failed !");
      console.log("Description Push failed !");
    } else {
      window.alert("Description Pushed !");
      console.log("Description successfully Pushed !");
    }
  };
  let description, value;
  const handleChange = (e) => {
    console.log(e);
    description = e.target.description;
    value = e.target.value;
    setAbout({ ...About, [description]: value });
  };
  return (
    <div className="Box">
      <h1>About</h1>
      <label>
        Enter your description :
        <input
          type="string"
          autoComplete="off"
          value={About.description}
          onChange={handleChange}
          placeholder="Your Description"
        />
      </label>
      <br />
      <br />
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  );
}

export default About;
