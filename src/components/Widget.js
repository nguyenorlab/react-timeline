import React, { Component } from "react";
import "./styles.css";
import copaSmallHeader from "./img/COPA-small_header.png";
import euroSmallHeader from "./img/EURO-small_header.png";

class Widget extends Component {
  render() {
    const img =
      this.props.tournament === "copa" ? copaSmallHeader : euroSmallHeader;
    const text = this.props.type === "table" ? "Tables" : "Bracket";
    return (
      <div>
        <div className={"smallHeader"}>
          <img className={"image"} src={img} alt="icon" />
          <h3 className={"text"}>{text}</h3>
        </div>
        <div className={"tables"}>{text}</div>
      </div>
    );
  }
}

export default Widget;
