import React, { Component } from "react";
import "./cardUI.css";
import githubImage from "../images/github-ico-b.png";
import linkImage from "../images/link-ico-b.png";
import youtubeImage from "../images/youtube-ico-b.png";

class Card extends Component {
  state = {};

  styles = { width: "18rem" };
  render() {
    return (
      <div className="card m-4 rounded">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.generateLanguages()}</li>
        </ul>
        <div className="card-body row">{this.generateLinks()}</div>
      </div>
    );
  }

  generateLanguages(props) {
    return this.props.lang.map(item => {
      return <span className={"badge badge-" + item.colour}>{item.name}</span>;
    });
  }
  generateLinks(props) {
    return this.props.links.map(item => {
      if (item.name == "github") {
        return (
          <div className="col text-center h-50">
            <a href={item.link} target="_blank">
              <img className="h-100" src={githubImage} alt="Github image" />
            </a>
          </div>
        );
      } else if (item.name == "website") {
        return (
          <div className="col text-center h-50">
            <a href={item.link} target="_blank">
              <img className="h-100" src={linkImage} alt="Link image" />
            </a>
          </div>
        );
      } else if ((item.name = "youtube")) {
        return (
          <div className="col text-center h-50">
            <a href={item.link} target="_blank">
              <img className="h-100" src={youtubeImage} alt="Github image" />
            </a>
          </div>
        );
      }
    });
  }
}

export default Card;
