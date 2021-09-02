import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "../sass/Nav.css";
import avatar from "./imeg/avatar.jpg";

function Nav() {
  const [ToggleState, setToggleState] = useState(false);
  const [ToggleState1, setToggleState1] = useState(false);
  const [ToggleState2, setToggleState2] = useState(false);
  const [ToggleState3, setToggleState3] = useState(false);
  const [ToggleState4, setToggleState4] = useState(false);
  return (
    <div className="row mb-5 justify-content-center">
      <nav className="col-11">
        <Link to="/">
          <img className="avatar" src={avatar} alt={avatar} />
        </Link>
        <ul>
          <li
            className={`description_tab active Tab ${ToggleState && " active"}`}
          >
            <NavLink
              onClick={()=> setToggleState(!ToggleState)}
              className={`nav-link`}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li
            className={`description_tab Tab ${ToggleState1 && " active1"}`}
          >
            <NavLink
            onClick={()=> setToggleState1(!ToggleState1)}
            className={`nav-link `}
             to="/Experience">
              Experience
            </NavLink>
          </li>

          <li
            className={`description_tab Tab ${ToggleState2 && " active2"}`}
          >
            <NavLink
            onClick={()=> setToggleState2(!ToggleState2)}
              className={`nav-link`}
             to="/Education">
              Education
            </NavLink>
          </li>

          <li
            className={`description_tab Tab ${ToggleState3 && " active3"}`}
          >
            <NavLink
            onClick={()=> setToggleState3(!ToggleState3)}
              className={`nav-link ${ToggleState && " active"}`}
               to="/skilis">
              skilis
            </NavLink>
          </li>
          <li
            className={`description_tab Tab ${ToggleState4 && " active4"}`}
            
          >
            <NavLink
            onClick={()=> setToggleState4(!ToggleState4)}
              className={`nav-link`}
            to="/Protfolio"
            >
              Protfolio
            </NavLink>
          </li>
          <li class="slider" role="presentation" />
        </ul>
        <ol>
          <li>
            <button>Download CV</button>
          </li>
          <li>
            <button>Contact me</button>
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default Nav;
