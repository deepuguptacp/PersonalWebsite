import React from "react";
import "./pages.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  // faStopCircle,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="reserved">
        <h2>
          {/* <FontAwesomeIcon icon={faStopCircle} /> */} All Rights Reserved ®
        </h2>
      </div>
      <div className="to-top">
        <div>
          <Link to="main-page" spy={true} smooth={true}>
            <h1>
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </h1>
          </Link>
        </div>
        <div className="to-top-text">Go to top</div>
      </div>
    </div>
  );
};

export default Footer;
