import React, { Component } from "react";
import ranjana from "./img/Ranjana.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    var whiteColor = {
      color: "white"
    };
    var offWhiteColor = {
      color: "#e8eff4"
    };
    return (
      <div className="background">
        <div className="container text-center">
          <img
            src={ranjana}
            className="rounded-circle home-image"
            alt="A smiling girl standing on a busy street. Kolkata's famous 
            yellow taxi can be seen in the background."
          />
          <h1 style={whiteColor}>Ranjana Sinha</h1>
          <h5 style={offWhiteColor}>
            Originally from Kolkata, India. Love to travel and click photos.
          </h5>
          <Link to="/career">Career &nbsp;</Link>
          <Link to="/">Photography &nbsp;</Link>
          <Link to="/">Blog &nbsp;</Link>
          <Link to="/">Contact Me</Link>
        </div>
      </div>
    );
  }
}

export default Home;
