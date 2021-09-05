import React, {useState} from "react";
import "../sass/NavMb.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";





function NavMb(){
    const [ToggleState, setToggleState] = useState(false);
    return(
<div className={ `list-container ${ToggleState && " active"}`}>
  <button className={'more-button '} onClick={()=> setToggleState(!ToggleState)} >
    <div className="menu-icon-wrapper">
      <div className="menu-icon-line half first"></div>
      <div className="menu-icon-line"></div>
      <div className="menu-icon-line half last"></div>
    </div>
  </button>
  <ul className="more-button-list">
    <li className="more-button-list-item">
      <NavLink to="/about">

      <span>about</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/Experience">
    
      <span>Experience</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/Education">
      <span>Education</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/skilis">
      <span>skilis</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/Protfolio">
      <span>Protfolio</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/Protfolio">
      <span>Contact</span>
      </NavLink>
    </li>
    <li className="more-button-list-item">
    <NavLink to="/Protfolio">
      <span>Download CV</span>
      </NavLink>
    </li>
    </ul>
</div>

    
        );
}
export default NavMb ;