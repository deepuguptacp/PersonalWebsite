import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faIdCard,
  faChartLine,
  faSkiing,
  faAward,
  faSchool,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <div className="Sidebar-Content" onClick={showSidebar}>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/">
              <FontAwesomeIcon className="icons" icon={faAddressCard} />
              About
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/award">
              <FontAwesomeIcon className="icons" icon={faAward} />
              Award
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/contact">
              <FontAwesomeIcon className="icons" icon={faIdCard} />
              Contact
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/education">
              <FontAwesomeIcon className="icons" icon={faSchool} />
              Education
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/experience">
              <FontAwesomeIcon className="icons" icon={faChartLine} />
              Experience
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/project">
              <FontAwesomeIcon className="icons" icon={faPen} />
              Projects
            </Link>
          </div>
        </div>
        <div className="sidebar-button">
          <div className="button-icon">
            <Link to="/skill">
              <FontAwesomeIcon className="icons" icon={faSkiing} />
              Skill
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
