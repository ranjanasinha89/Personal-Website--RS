import React, { Component } from "react";
import { Link } from "react-router-dom";
import ranjana from "./img/Ranjana-Kodai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Career extends Component {
  state = {
    skillSet: [
      {
        id: "sk01",
        skill: "SQL",
        level: "advanced"
      },
      {
        id: "sk02",
        skill: "PL / SQL",
        level: "advanced"
      },
      {
        id: "sk03",
        skill: "Python",
        level: "advanced"
      },
      {
        id: "sk04",
        skill: "HTML",
        level: "advanced"
      },
      {
        id: "sk05",
        skill: "CSS",
        level: "Intermediate"
      },
      {
        id: "sk06",
        skill: "Bootstrap",
        level: "advanced"
      },
      {
        id: "sk07",
        skill: "React - Redux",
        level: "advanced"
      },
      {
        id: "sk08",
        skill: "NodeJS",
        level: "advanced"
      },
      {
        id: "sk09",
        skill: "Javascript",
        level: "advanced"
      },
      {
        id: "sk10",
        skill: "Express",
        level: "advanced"
      },
      {
        id: "sk11",
        skill: "C++",
        level: "intermediate"
      },
      {
        id: "sk12",
        skill: "Oracle Databases",
        level: "advanced"
      },
      {
        id: "sk13",
        skill: "MySQL",
        level: "advanced"
      },
      {
        id: "sk14",
        skill: "NoSQL",
        level: "advanced"
      },
      {
        id: "sk15",
        skill: "Agile Methodologies",
        level: "advanced"
      },
      {
        id: "sk16",
        skill: "git",
        level: "advanced"
      }
    ],
    education: [
      {
        id: "ed01",
        degree: "MS, Computer Science",
        university: "Indiana University Bloomington",
        location: "Indiana, USA",
        timespan: "August, 2017- May, 2019"
      },
      {
        id: "ed02",
        degree: "B.Tech, Electronics and Instrumentation",
        university: "WBUT",
        location: " Kolkata, India",
        timespan: "August, 2007 - June, 2011"
      }
    ],
    work: [
      {
        id: "wk01",
        post: "Sr. Software Engineer",
        company: "Cerner India Pvt. Ltd",
        location: "Bangalore, India",
        timespan: "October, 2014 - July, 2017"
      },
      {
        id: "wk02",
        post: "Application Developer",
        company: "IBM India Pvt Ltd",
        location: " Bangalore, India",
        timespan: " February, 2012 - September, 2014"
      }
    ]
  };

  render() {
    var whiteColor = {
      color: "white"
    };
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-2">
            <Link to="/">
              <img
                src={ranjana}
                className="rounded-circle career-image"
                alt="A smiling girl standing on a hill top. The background is a lush blue-green mountain."
              />
            </Link>
            <div className="mt-2 ml-2 mt-md-2 ml-md-5 mt-sm-2 mt-sm-2">
              <FontAwesomeIcon style={whiteColor} icon={["fab", "linkedin"]} />
              <a href="https://www.linkedin.com/in/ranjana-sinha/">
                &nbsp; &nbsp;Linkedin
              </a>
              <br />
              <FontAwesomeIcon style={whiteColor} icon={["fab", "github"]} />
              <a href="https://github.com/ranjanasinha89">&nbsp; Github</a>
              <br />
              <FontAwesomeIcon
                style={whiteColor}
                icon={["fab", "hackerrank"]}
              />
              <a href="https://www.hackerrank.com/ranjanasinha_89">
                &nbsp; Hackerrank
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-8 col-md-10">
            <div className="card bg-info text-white m-2">
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">
                  {this.state.education.map(edu => (
                    <li>
                      {edu.degree} - <b>{edu.university}</b> , {edu.location} -{" "}
                      <i> {edu.timespan}</i>
                    </li>
                  ))}
                </p>
              </div>
            </div>
            <div className="card bg-info text-white m-2">
              <div class="card-body">
                <h5 class="card-title">Professional Experience</h5>
                <p class="card-text">
                  {this.state.work.map(wk => (
                    <li>
                      {wk.post},<b> {wk.company}</b>,{wk.location} -{" "}
                      <i> {wk.timespan}</i>
                    </li>
                  ))}
                </p>
              </div>
            </div>
            <div className="card bg-info text-white m-2">
              <div class="card-body">
                <h5 class="card-title">Skills</h5>
                <p class="card-text">
                  {this.state.skillSet.map(skl => (
                    <button
                      type="button"
                      class="btn btn-light m-1"
                      data-toggle="tooltip"
                      title={skl.level}
                    >
                      {skl.skill}
                    </button>
                  ))}
                </p>
              </div>
            </div>
            <div className="card bg-info text-white m-2">
              <div class="card-body">
                <h5 class="card-title">Awards and Recognition</h5>
                <p class="card-text">
                  <li>
                    <b>NOTT(Night On The Town) Award</b>, in Cerner, for
                    delivering "Modify Multiple Charges" project on time with
                    minimal defects.
                  </li>
                  <li>
                    <b>Eminence and Excellence Award</b>, in IBM, for
                    contribution in the MDS project
                  </li>
                </p>
              </div>
            </div>
            <div className="card bg-info text-white m-2">
              <div class="card-body">
                <h5 class="card-title">Volunteer Experience</h5>
                <p class="card-text">
                  <li>
                    Engagement Leader(Event Management and Logistics) for Women
                    in Computing at Indiana University BLoomington.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Career;
