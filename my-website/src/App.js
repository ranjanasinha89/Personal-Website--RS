import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Career from "./components/career/Career";
import Home from "./components/home/Home";
import Photography from "./components/photography/Photography";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/photo" component={Photography} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
