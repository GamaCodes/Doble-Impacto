import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UsPage from "./pages/us";
import AboutPage from "./pages/about";
import ValuesPage from "./pages/values";
import ServicesPage from "./pages/services";
import IndexPage from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nosotros" component={UsPage} />
        <Route exact path="/acerca" component={AboutPage} />
        <Route exact path="/valores" component={ValuesPage} />
        <Route exact path="/servicios" component={ServicesPage} />
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default App;
