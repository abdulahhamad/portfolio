import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Plans from "./Components/Plans";
import Services from "./Components/Services";
import Works from "./Components/Works";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Plans" component={Plans} />
      <Route path="/Services" component={Services} />
      <Route path="/Works" component={Works} />
      </Switch>
    </Router>
  );
}

function Home(){
  return(<h1>Home</h1>
  );
  }

export default App;
