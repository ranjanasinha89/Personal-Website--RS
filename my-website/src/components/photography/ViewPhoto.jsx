import React, { Component } from "react";

class ViewPhoto extends Component {
  closePage() {
    window.history.back();
  }
  render() {
    console.log(this.props);
    let imagesrc = "./img/" + this.props.match.params.photoid + ".jpg";

    return (
      <React.Fragment>
        <img
          src={require(`${imagesrc}`)}
          alt="this.props.match.params.photoid"
          className="img-fluid photo"
        />
        <div className="row justify-content-center">
          <button onClick={() => this.closePage()} className="btn btn-info m-2">
            Close
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewPhoto;
