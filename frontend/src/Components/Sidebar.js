import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faBars,
  faIdCard,
  faChartLine,
  faSkiing,
  faAward,
  faSchool,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./pages.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="checkbar">
        <label htmlFor="check">
          <FontAwesomeIcon className="icons" icon={faBars} id="sidebar_btn" />
        </label>
      </div>

      <button>
        <FontAwesomeIcon className="icons" icon={faAddressCard} />
        <span>About</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faChartLine} />
        <span>Experience</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faPen} />
        <span>Projects</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faSkiing} />
        <span>Skills</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faAward} />
        <span>Awards</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faSchool} />
        <span>Education</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faIdCard} />
        <span>Contact</span>
      </button>
      <button>
        <FontAwesomeIcon className="icons" icon={faFile} />
        <span>Resume</span>
      </button>
    </div>
  );
};

export default Sidebar;
