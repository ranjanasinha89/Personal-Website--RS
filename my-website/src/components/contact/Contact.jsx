import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  state = {};
  render() {
    var headerStyle = {
      color: "white",
      textAlign: "center"
    };
    var whiteColor = {
      color: "white"
    };

    var infoStyle = {
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "#298a8a"
    };
    return (
      <React.Fragment>
        <h2 style={headerStyle}>Contact Me</h2>
        <div className="row">
          <div className="col-6">
            <div style={infoStyle}>
              <Map
                center={[39.1636505, -86.525757]}
                zoom={12}
                //   width={700}
                height={600}
              >
                <Marker
                  anchor={[39.17432, -86.491788]}
                  payload={1}
                  onClick={({ event, anchor, payload }) => {}}
                />
              </Map>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <FontAwesomeIcon style={whiteColor} icon={"home"} />
              <p style={whiteColor}>&nbsp; Bloomington, Indiana</p>
            </div>
            <div className="row">
              <FontAwesomeIcon style={whiteColor} icon={"envelope"} />
              <p style={whiteColor}>&nbsp; &nbsp;ransinha@iu.edu |</p>
              <p style={whiteColor}>&nbsp;rananasinha.89@gmail.com</p>
            </div>
            <div className="row">
              <FontAwesomeIcon style={whiteColor} icon={"phone"} />
              <p style={whiteColor}>&nbsp;&nbsp;+1-812-955-9522</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
