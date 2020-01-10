import React, { Component } from "react";
import "./customBadge.css";

class Badge extends Component {
  state = {};
  styles = {
    background: this.props.bg,
    color: this.props.colour
  };
  render() {
    return (
      <div className="col mb-3 text-center">
        <span className="customBadge" style={this.styles}>
          {this.props.name}
        </span>
      </div>
    );
  }
}

export default Badge;
