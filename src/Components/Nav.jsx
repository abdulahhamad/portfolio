import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../sass/Nav.css";
import avatar from "../imeg/avatar.jpg";


function Nav() {
  var tabs = document.getElementsByClassName("Tab");

Array.prototype.forEach.call(tabs, function (tab) {
  tab.addEventListener("click", setActiveClass);
});

function setActiveClass(evt) {
  Array.prototype.forEach.call(tabs, function (tab) {
    tab.classList.remove("active");
  });

  evt.currentTarget.classList.add("active");
}
  return (
    <div className="row justify-content-center">
      <nav className="col-11">
        <Link to="/">
          <img className="avatar" src={avatar} alt={avatar} />
        </Link>
        <ul className="Tabs">
          <li
            className="description_tab active Tab"
            id="tab-title-description"
            role="tab"
            aria-controls="tab-description"
            
          >
            <Link to="/about" className="nav-link">About</Link>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <Link to="/Experience" className="nav-link">Experience</Link>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <Link className="nav-link" to="/Education">
              Education
            </Link>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <Link className="nav-link" to="/skilis">
              skilis
            </Link>
          </li>
          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <Link className="nav-link" to="/Protfolio">
              Protfolio
            </Link>
          </li>
          <li class="slider" role="presentation" />
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
