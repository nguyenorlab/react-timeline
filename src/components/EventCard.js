import React, { Component } from "react";
import "./styles.css";
import moment from "moment";

class EventCard extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="wrapper">
        <div className="left">
          <div className="teamA">
            <span className={"flag-icon flag-icon-" + event.homeFlag} />
            {event.homeTeam}
          </div>
          <div className="teamB">
            <span className={"flag-icon flag-icon-" + event.awayFlag} />
            {event.awayTeam}
          </div>
        </div>
        <div className="middle">
          <div className="time">
            {moment.unix(event.startTime).format("HH:mm")}
          </div>
        </div>
        <div className="right">
          <div className="oddsContainer">
            <div className="odds">
              <div className="oddsbutton">{event.oddsHome}0</div>
            </div>
            <div className="odds">
              <div className="oddsbutton">{event.oddsDraw}0</div>
            </div>
            <div className="odds">
              <div className="oddsbutton">{event.oddsAway}0</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
