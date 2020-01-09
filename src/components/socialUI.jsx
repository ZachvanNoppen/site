import React, { Component } from "react";
//import { ReactComponent as emailim } from "./images/email-ico.svg";
import emailImage from "../images/email-ico.png";
import githubImage from "../images/github-ico.png";
import linkedinImage from "../images/linkedin-ico.png";
import resumeImage from "../images/resume-ico.png";
import "./socialUI.css";

class Socials extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row indent">
          <div className="col img-center">
            <a href="mailto:dzachvannoppen@gmail.com" target="_blank">
              <img src={emailImage} alt="Email image" />
            </a>
          </div>
          <div className="col img-center">
            <a href="https://github.com/zachvannoppen" target="_blank">
              <img src={githubImage} alt="Github image" />
            </a>
          </div>
          <div className="col img-center">
            <a
              href="https://www.linkedin.com/in/zach-van-noppen-974a75170/"
              target="_blank"
            >
              <img src={linkedinImage} alt="LinkedIn" />
            </a>
          </div>
          <div className="col img-center">
            <a
              href="../files/vanNoppen_DZachary_Resume.pdf"
              download
              target="_blank"
            >
              <img src={resumeImage} alt="Resume" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Socials;
