import React, { Component } from "react";
import "./titles.css";

class Title extends Component {
  state = {};

  render() {
    return (
      <div
        id={this.props.link}
        className={" m-4 p-5 text-" + this.props.location}
      >
        <h3>{this.props.text}</h3>
        <h3 className="fade-one">{this.props.text}</h3>
        <h3 className="fade-two">{this.props.text}</h3>
      </div>
    );
  }
}
export default Title;
