import React, { Component } from "react";
import Projects from "./allCards";
import Socials from "./socialUI";
import Title from "./titles.jsx";
import Badge from "./customBadges";
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
            <a href="/vanNoppen_DZachary_Resume.pdf" download>
              <span> resume</span>
            </a>
          </p>
          <Socials />
        </div>
        <Title link="techs" text="Tech" location="center" />
        <div className="container text-center">
          <p className="styled-text">
            I have dabbled in a lot... <br></br>Here's the full list:
          </p>
          <div className="container row mb-5 text-center">
            <Badge name="HTML5" colour="black" bg="#FF5F47" />
            <Badge name="CSS" colour="black" bg="#47ABFF" />
            <Badge name="Bootstrap" colour="black" bg="#47ABFF" />
            <Badge name="Javascript" colour="black" bg="#FFCE2A" />
            <Badge name="Node.js" colour="black" bg="#FFCE2A" />
            <Badge name="React" colour="black" bg="#FFCE2A" />
            <Badge name="mySQL" colour="black" bg="#50C3F1" />
            <Badge name="postgreSQL" colour="black" bg="#50C3F1" />
            <Badge name="PHP" colour="black" bg="#FFFA35" />
            <Badge name="Python" colour="black" bg="#FFFA35" />
            <Badge name="Java" colour="black" bg="#F5902F" />
            <Badge name="C++" colour="black" bg="#2F9EF5" />
            <Badge name="openFramework" colour="black" bg="#2F9EF5" />
            <Badge name="C" colour="black" bg="#2F9EF5" />
            <Badge name="Arduino" colour="black" bg="#2F9EF5" />
            <Badge name="C#" colour="black" bg="#2F9EF5" />
            <Badge name="XML" colour="black" bg="#6CBE45" />
            <Badge name="Excel/VBA" colour="black" bg="#6CBE45" />
            <Badge name="npm" colour="black" bg="#ED5E29" />
            <Badge name="Git" colour="black" bg="#ED5E29" />
            <Badge name="Unity" colour="black" bg="#E3E3E3" />
            <Badge name="UnrealEngine" colour="black" bg="#E3E3E3" />
            <Badge name="Photoshop" colour="black" bg="#DE6356" />
            <Badge name="Illustrator" colour="black" bg="#DE6356" />
            <Badge name="Audition" colour="black" bg="#DE6356" />
            <Badge name="AfterEffects" colour="black" bg="#DE6356" />
            <Badge name="Premier" colour="black" bg="#DE6356" />
            <Badge name="Maya2019" colour="black" bg="#56DEB9" />
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
