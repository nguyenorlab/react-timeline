import React, { Component } from "react";
import "./styles.css";

import pauseIcon from "./images/pause.png";
import playIcon from "./images/play.png";

class Buttons extends Component {
  render() {
    const { switchBtn } = this.props;
    return (
      <div className="buttons">
        <button
          className="btn btn-pause"
          title="Play/Pause"
          onClick={() => switchBtn()}
        >
          {this.props.hasPlay ? "⏸" : "▶️"}
        </button>
      </div>
    );
  }
}

export default Buttons;
