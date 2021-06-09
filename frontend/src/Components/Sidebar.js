import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  faPen,
  faBars,
  faIdCard,
  faChartLine,
  faSkiing,
  // faAward,
  faSchool,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./pages.css";
import Pdf from "./images/Deepu_Resume.pdf";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="checkbar">
        <label htmlFor="check">
          <FontAwesomeIcon className="icons" icon={faBars} id="sidebar_btn" />
        </label>
      </div>

      <button>
        <Link to="about" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faAddressCard} />
          <span>About</span>
        </Link>
      </button>

      <button>
        <Link to="experience" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faChartLine} />
          <span>Experience</span>
        </Link>
      </button>

      <button>
        <Link to="project" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faPen} />
          <span>Projects</span>
        </Link>
      </button>
      <button>
        <Link to="skill" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faSkiing} />
          <span>Skill</span>
        </Link>
      </button>
      {/* <button>
        <FontAwesomeIcon className="icons" icon={faAward} />
        <span>Awards</span>
      </button> */}
      <button>
        <Link to="education" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faSchool} />
          <span>Education</span>
        </Link>
      </button>
      <button>
        <Link to="contact" spy={true} smooth={true}>
          <FontAwesomeIcon className="icons" icon={faIdCard} />
          <span>Contact</span>
        </Link>
      </button>
      <a href={Pdf} target="_blank" rel="noreferrer">
        <button>
          <FontAwesomeIcon className="icons" icon={faFile} />
          <span>Resume</span>
        </button>
      </a>
    </div>
  );
};

export default Sidebar;
