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
  
  return (
    <div className="row mb-5 justify-content-center">
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
            <NavLink
              isActive={(match, location) => {
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
              }}
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <NavLink
            isActive={(match, location) => {
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
              }}
             to="/Experience" className="nav-link">
              Experience
            </NavLink>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <NavLink
            isActive={(match, location) => {
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
              }}
             className="nav-link" to="/Education">
              Education
            </NavLink>
          </li>

          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <NavLink
            isActive={(match, location) => {
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
              }}
             className="nav-link" to="/skilis">
              skilis
            </NavLink>
          </li>
          <li
            className="description_tab Tab"
            id="tab-title-reviews"
            role="tab"
            aria-controls="tab-reviews"
          >
            <NavLink
                        isActive={(match, location) => {
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
              }}

             className="nav-link" to="/Protfolio">
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
