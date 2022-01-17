import React, { Component } from "react";
import "./styles.css";
import momentum from "./img/momentum.png";

class LiveCard extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <div className="wrapper live">
          <div className="scoreWrapper">
            <span className="homeScore">1</span>
            <span className="awayScore">2</span>
          </div>
          <div className="left">
            <div className="teamA">
              <span className={"flag-icon flag-icon-" + event.awayFlag} />
              {event.homeTeam}
            </div>
            <div className="teamB">
              <span className={"flag-icon flag-icon-" + event.homeFlag} />
              {event.awayTeam}
            </div>
          </div>
          <div className="middle">
            <div className="time">45'</div>
          </div>
          <div className="right">
            <div className="oddsContainer">
              <div className="odds">
                <div className="oddsbutton">{event.oddsHome}</div>
              </div>
              <div className="odds">
                <div className="oddsbutton">{event.oddsDraw}</div>
              </div>
              <div className="odds">
                <div className="oddsbutton">{event.oddsAway}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="momentum">
          <img src={momentum} alt="icon" />
        </div>
      </div>
    );
  }
}

export default LiveCard;
