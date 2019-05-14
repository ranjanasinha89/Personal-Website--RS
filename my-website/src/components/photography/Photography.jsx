import React, { Component } from "react";

class PhotographyView extends Component {
  state = {
    photos: [
      {
        id: "ph01",
        addrs: "./img/boathouse.jpg",
        title: "Boat House",
        caption:
          "From Chicago's famous Navy Pier, if you look into the cool blue, you see the small Boat House in the middle of the lake."
      },
      {
        id: "ph02",
        addrs: "./img/forest.jpg",
        title: "Haunted House",
        caption:
          "Indiana University Bloomington's Kirkwood Hall, as seen from the Dunn's Woods on chill autumn evening."
      },
      {
        id: "ph03",
        addrs: "./img/monastery.jpg",
        title: "Komic Monastery",
        caption:
          "World's highest motorable village is in the Himalayas with a vibrantly colored Komic Monastery."
      },
      {
        id: "ph04",
        addrs: "./img/moon.jpg",
        title: "Full Moon",
        caption: "Full moon on a summer night"
      },
      {
        id: "ph05",
        addrs: "./img/musicschool.jpg",
        title: "The Lonely Corridor",
        caption:
          "Jacobs School of Music, after hours. The students have left, but the corridors are filled with music that they left behind."
      },
      {
        id: "ph06",
        addrs: "./img/purplesunset.jpg",
        title: "Purple is the color of sunset",
        caption: "Monroe Lake, gleaming in the last light of the summer sun."
      },
      {
        id: "ph07",
        addrs: "./img/sunset.jpg",
        title: "Another shade of evening",
        caption: "Monroe Lake basking in the twilight."
      },
      {
        id: "ph08",
        addrs: "./img/wineglasses.jpg",
        title: "An Evening to remember",
        caption:
          "A lovely evening spent at the foothills of Himalaya, with good food, music and really wonderful company."
      },
      {
        id: "ph09",
        addrs: "./img/summer.jpg",
        title: "Tulips",
        caption: "An assorted collection of Tulips at the Chicago Zoo."
      }
    ]
  };

  getImage = address => {
    return (
      <img
        style={{ height: "18rem" }}
        src={require(`${address}`)}
        alt=""
        className="card-img-top img-responsive photo"
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-columns">
          {this.state.photos.map(photo => (
            <div
              key={photo.id}
              className="card bg-info text-white m-2"
              style={{ height: "25rem" }}
            >
              {this.getImage(photo.addrs)}

              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">{photo.caption}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default PhotographyView;
