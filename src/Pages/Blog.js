import React from "react";
import "./text.css";

function Blog() {
  const handleSubmit = () => {
    // event.preventDefault();
    // ... get data form
    // ... submit to API or something
  };
  return (
    <div className="Box">
      <h1>Blogs</h1>
      <label>
        Title :
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

export default Blog;
