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


function App() {
  return (
    <Router>
      <Nav />
      
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
      <NavMb className=" d-lg-none" />
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
}

export default App;
