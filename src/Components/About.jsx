import React from "react";
import "../sass/About.css"

function About(){
    return (
          <div className="row w-100 justify-content-center">
          <div className='AboutMe-cont'>
          <div>
          <h1>About Me</h1>
          <p>Creative Front-End Developer with 2 years of experience providing<br /> high-impact Solutions for different web systems.</p>
          <p>Skilled in designing, developing and testing multiple<br /> web-based applications incorporating a range of technologies.</p>
          <p>&nbsp;Aspiring to combine broad background<br /> with strong technical skills to excel as a Front-End Developer.</p>
          </div>
          <ol className="myOl">
          <li>
            Web Designer
          </li>
          <li>
            Web Development
          </li>
          <li>
            UI UX Design
          </li>
          <li>
            Creative
          </li>
          </ol>
          </div>
          <div className="poll"></div>
          <div className="poll2"></div>
          </div>
        );
}
export default About ;