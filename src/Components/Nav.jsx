import React from "react";
import Logo from "./logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Nav() {
  return (
    <div className="row justify-content-center">
      <nav className="col-11">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li>
            <Link className="nav-link" to="/plans">Plans</Link>
          </li>

          <li>
            <Link className="nav-link" to="/services">Services</Link>
          </li>

          <li>
            <Link className="nav-link" to="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
