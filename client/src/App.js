import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skilis from "./Components/Skilis";
import Protfolio from "./Components/Protfolio";
import Plans from "./Components/Plans";
import Services from "./Components/Services";
import Works from "./Components/Works";
import "./sass/main.css";
import SosyalBar from "./Components/SosyalBar";
import NavMb from "./Components/NavMb";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

  return (
    <Router>
      <Nav />
      <NavMb />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Education" component={Education} />
        <Route path="/Skilis" component={Skilis} />
        <Route path="/Protfolio" component={Protfolio} />
        <Route path="/Plans" component={Plans} />
        <Route path="/Services" component={Services} />
        <Route path="/Works" component={Works} />
      </Switch>
      <SosyalBar />
      
    </Router>
  );
}

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="row justify-content-center cont">
    <div className="container d-flex welcom-cont">
    {listOfPosts.map((value, key) => {
        return (
      <div className="welcom">
      <h1>{value.title}
      </h1>
      <p>{value.postText}</p>
      <p>Skilled in designing, developing and testing multiple<br /> web-based applications incorporating a range of technologies.</p>
      <p>&nbsp;Aspiring to combine broad background<br /> with strong technical skills to excel as a Front-End Developer.</p>
      </div>
      );
      })}
      <div className="welcom">
      </div>
      <div className="welcom">
      </div>
    </div>
    </div>
  );
}

export default App;
