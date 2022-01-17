import React, { Component } from "react";
import data from "../data/data.json";
import _ from "lodash";
import moment from "moment";
import EventCard from "./EventCard";
import LiveCard from "./LiveCard";
import CopaHeader from "./CopaHeader";
import Widget from "./Widget";

class CopaEventList extends Component {
  render() {
    const { time } = this.props;
    const currentTime = moment(time);
    const nextDay = moment(time);
    const bracketShow = moment("Jun 27 2021 00:00:00");
    const tablesHide = moment("Jun 30 2021 00:00:00");
    const startTime = moment("Jun 11 2021 15:00:00");
    const endTime = moment("Jul 11 2021 23:59:00");

    nextDay.add(1, "day");

    var euroEvents = _(data)
      .filter((x) => x.tournament === "Copa")
      .value();

    var liveList = _(euroEvents)
      .filter((x) =>
        _.inRange(time, moment.unix(x.startTime), moment.unix(x.endTime))
      )
      .value();

    var todayList = _(euroEvents)
      .filter((x) => currentTime.isSame(moment.unix(x.startTime), "day"))
      .filter((x) => !_.inRange(time, moment.unix(x.startTime), nextDay))

      .value();

    var tomorrowList = _(euroEvents)
      .filter((x) => nextDay.isSame(moment.unix(x.startTime), "day"))
      .value();

    return (
      <div>
        {liveList.length > 0 ? <CopaHeader title={"Live now"} /> : ""}
        {liveList.map((event) => (
          <LiveCard event={event} />
        ))}
        {todayList.length > 0 ? <CopaHeader title={"Today"} /> : ""}
        {todayList.map((event) => (
          <EventCard event={event} />
        ))}
        {tomorrowList.length > 0 ? <CopaHeader title={"Tomorrow"} /> : ""}
        {tomorrowList.map((event) => (
          <EventCard event={event} />
        ))}

        {_.inRange(time, startTime, tablesHide) ? (
          <Widget tournament={"copa"} type={"table"} />
        ) : (
          ""
        )}
        {_.inRange(time, bracketShow, endTime) ? (
          <Widget tournament={"copa"} type={"bracket"} />
        ) : (
          ""
        )}

        <div className={"link"}>
          ALL COPA AMERICA 2021
          <svg
            className="EventFooter__chevron___3CBjf"
            width="12"
            height="12"
            viewBox="0 0 8 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.59 8.59L12 13.17 7.41 8.59 6 10 12 16 18 10z"
              transform="rotate(-90 5 13)"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default CopaEventList;
