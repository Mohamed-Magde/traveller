import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import "./scss/main.css";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Desktop} />
        <Route path="/mobile" component={Mobile} />
        <Route path="/detail" component={Detail} />
      </Fragment>
    </Router>
  );
}

export default App;
