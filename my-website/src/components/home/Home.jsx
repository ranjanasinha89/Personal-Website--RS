import React, { Component } from "react";
import ranjana from "./img/Ranjana.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    var whiteColor = {
      color: "white"
    };
    var infoStyle = {
      color: "#e8eff4",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "#298a8a"
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
          <div style={infoStyle}>
            <p>
              Hi, I'm Ranjana, orginally from Kolkata, India. I'm a software
              engineer by profession. I just completed my Masters Degree in
              Computer science after 5 years working in the IT industry. In my
              free time, I like to travel to new places, click photos, eat good
              food and enjoy life as it comes. I love museums, old cities and
              architecture. I enjoy good movies(awesome if it's a detective
              thriller), good books (I read almost everything, being a bengali I
              have a soft spot for Bengali Literature) and music.
              <br /> I have a pet cat "Mao-chi", whom I rescued from the streets
              last year. He is the calmest cat in the wole wide world and is a
              big part of my life. Spending time with "Mao-chi" works as a
              stress-buster.
            </p>
          </div>
          <br />
          <button class="btn btn-info m-2">
            <Link to="/career">Career &nbsp;</Link>
          </button>
          <button class="btn btn-info m-2">
            {" "}
            <Link to="/photo">Photography &nbsp;</Link>
          </button>

          <button class="btn btn-info m-2">
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
