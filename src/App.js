import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={home} />
      </Switch>
    </Router>
  );
}

export default App;
