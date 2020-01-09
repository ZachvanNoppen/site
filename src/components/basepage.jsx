import React, { Component } from "react";
import Projects from "./allCards";
import Socials from "./socialUI";
import Title from "./titles.jsx";
import "./basepage.css";

class Base extends Component {
  state = {};

  render() {
    const styles = {
      stroke: "rgb(255,255,255)"
    };

    return (
      <div className="">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="#">
            zach<span className="highlightText"> van noppen</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link pl-3 pr-3" href="#projects">
                  projects <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-3 pr-3" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="col">
          <div className="row">
            <svg height="20" width="500">
              <line x1="0" y1="0" x2="320" y2="0" style={styles} />
              <line x1="0" y1="0" x2="220" y2="0" style={styles} />
            </svg>
          </div>
          <div className="row">
            <svg height="10" width="500">
              <line x1="0" y1="0" x2="220" y2="0" style={styles} />
              <line x1="0" y1="0" x2="100" y2="0" style={styles} />
            </svg>
          </div>
        </div>

        <div className="container">
          <p className="m-5 styled-text">
            I am an aspiring web and software developer studying at Carleton
            University. I have a passion for using new technology to design
            projects that tell stories through multimedia.
          </p>
        </div>
        <Socials />
        <Title link="projects" text="projects" location="left" />
        <div className="paragram">
          <div className="container">
            <Projects />
          </div>
        </div>
        <Title link="contact" text="contact" location="right" />
        <div className="container text-center">
          <p className="p-5 mt-3 styled-text">
            Reach me by email, or through one of the methods listed on my
            <a href="../files/vanNoppen_DZachary_Resume.pdf" download>
              <span> resume</span>
            </a>
          </p>
          <Socials />
        </div>
      </div>
    );
  }
}

export default Base;
