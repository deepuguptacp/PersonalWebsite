import React from "react";
import Clock from "react-live-clock";
import "../subPages.css";
import Img from "../images/lappy.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="currentDate" align="right">
        <Clock format={" dddd, Do MMMM YYYY, h:mm:ss A"} ticking={true} />
      </div>
      <div className="homepage">
        <h1>
          “Engineers like to solve problems. If there are no problems handily
          available, they will create their own problems." <br />
        </h1>

        <div className="image-info">
          <img src={Img} className="profile-image" alt="Loding..." />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
