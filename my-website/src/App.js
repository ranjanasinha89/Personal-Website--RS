import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Career from "./components/career/Career";
import Home from "./components/home/Home";
import Photography from "./components/photography/Photography";
import ViewPhoto from "./components/photography/ViewPhoto";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Contact from "./components/contact/Contact";

library.add(fab, faHome, faEnvelope, faPhone);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/photo" component={Photography} />
          <Switch>
            <Route exact path="/viewphoto/:photoid" component={ViewPhoto} />
          </Switch>
          <Route exact path="/contact" component={Contact} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
