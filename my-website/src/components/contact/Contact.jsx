import React, { Component } from "react";
import axios from "axios";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(message);
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }
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
              <Map center={[39.1636505, -86.525757]} zoom={12} height={600}>
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
            <div className="row">
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                style={whiteColor}
                method="POST"
              >
                <div className="form-group">
                  <label id="nameLabel">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label id="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label id="messageLabel">Message</label>
                  <textarea className="form-control" rows="7" id="message" />
                </div>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
