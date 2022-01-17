import React, { Component } from "react";
import "./styles.css";

class EuroHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="headerWrapper euro">
        <h3>{title}</h3>
        <div className="oddsHeaders">
          <div className="oddsLabel">1</div>
          <div className="oddsLabel">X</div>
          <div className="oddsLabel">2</div>
        </div>
      </div>
    );
  }
}

export default EuroHeader;
