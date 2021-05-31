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
        <button>
          <FontAwesomeIcon className="icons" icon={faAddressCard} />
          <span>
            <Link to="/">About</Link>
          </span>
        </button>
        <button>
          <FontAwesomeIcon className="icons" icon={faAward} />
          <span>
            <Link to="/award">Award</Link>
          </span>
        </button>

        {/* 
          <button>
            <FontAwesomeIcon className="icons" icon={fa} />
            <span>
              <Link to="/blog">Blog</Link>
            </span>
          </button>
         */}

        <button>
          <FontAwesomeIcon className="icons" icon={faIdCard} />
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </button>

        <button>
          <FontAwesomeIcon className="icons" icon={faSchool} />
          <span>
            <Link to="/education">Education</Link>
          </span>
        </button>

        <button>
          <FontAwesomeIcon className="icons" icon={faChartLine} />
          <span>
            <Link to="/experience">Experience</Link>
          </span>
        </button>

        <button>
          <FontAwesomeIcon className="icons" icon={faPen} />
          <span>
            <Link to="/project">Project</Link>
          </span>
        </button>

        <button>
          <FontAwesomeIcon className="icons" icon={faSkiing} />
          <span>
            <Link to="/skill">Skill</Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
