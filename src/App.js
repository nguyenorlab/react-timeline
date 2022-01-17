import React, { Component } from "react";
import Buttons from "./components/Buttons";
import EuroEventList from "./components/EuroEventList";
import CopaEventList from "./components/CopaEventList";
import header from "./components/img/header.png";
import euroBigHeader from "./components/img/Mobile_euro_big_header.svg";
import copaBigHeader from "./components/img/Mobile_copa_big_header.svg";

import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./components"; // example render components - source below
import { format } from "date-fns";
import { scaleTime } from "d3-scale";
import "./App.css";
import moment from "moment";
const sliderStyle = {
  position: "relative",
  width: "100%"
};

function formatTick(ms) {
  return format(new Date(ms), "dd MMMM");
}

const halfHour = 1000 * 60 * 60;

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: moment("Jun 11 2021 00:00:00"),
      updated: moment("Jun 11 2021 00:00:00"),
      min: moment("Jun 11 2021 15:00:00"),
      max: moment("Jul 11 2021 23:59:00")
    };
  }

  switchBtn = () => {
    this.setState(
      {
        hasPlay: !this.state.hasPlay
      },
      function () {
        this.countDownTimer();
      }
    );
  };

  countDownTimer = () => {
    if (this.state.hasPlay) {
      this.downTime = setInterval(() => {
        this.setState({
          selected: moment(this.state.selected).add(1, "hours"),
          updated: moment(this.state.updated).add(1, "hours")
        });
      }, 1000);
    } else {
      clearInterval(this.downTime);
    }
  };

  onChange = ([ms]) => {
    this.setState({
      selected: new Date(ms)
    });
  };

  onUpdate = ([ms]) => {
    this.setState({
      updated: new Date(ms)
    });
  };

  render() {
    const { min, max, selected, updated } = this.state;

    const dateTicks = scaleTime()
      .domain([min, max])
      .ticks(31)
      .map((d) => +d);

    return (
      <div>
        <div className="main">
          <div className="topWrapper">
            <Buttons
              hasPlay={this.state.hasPlay}
              switchBtn={() => this.switchBtn()}
            />
            <div className="slider">
              <Slider
                mode={1}
                step={halfHour}
                domain={[+min, +max]}
                rootStyle={sliderStyle}
                onUpdate={this.onUpdate}
                onChange={this.onChange}
                values={[+selected]}
              >
                <Rail>
                  {({ getRailProps }) => (
                    <SliderRail getRailProps={getRailProps} />
                  )}
                </Rail>
                <Handles>
                  {({ handles, getHandleProps }) => (
                    <div>
                      {handles.map((handle) => (
                        <Handle
                          key={handle.id}
                          handle={handle}
                          domain={[+min, +max]}
                          getHandleProps={getHandleProps}
                        />
                      ))}
                    </div>
                  )}
                </Handles>
                <Tracks right={false}>
                  {({ tracks, getTrackProps }) => (
                    <div>
                      {tracks.map(({ id, source, target }) => (
                        <Track
                          key={id}
                          source={source}
                          target={target}
                          getTrackProps={getTrackProps}
                        />
                      ))}
                    </div>
                  )}
                </Tracks>
                <Ticks values={dateTicks}>
                  {({ ticks }) => (
                    <div>
                      {ticks.map((tick) => (
                        <Tick
                          key={tick.id}
                          tick={tick}
                          count={ticks.length}
                          format={formatTick}
                        />
                      ))}
                    </div>
                  )}
                </Ticks>
              </Slider>
            </div>

            <div className="calendarContainer">
              <div className="calendarDate">
                <div className="calendarDay">
                  {moment(this.state.updated).format("DD")}
                </div>
                <div className="calendarLabel">
                  {moment(this.state.updated).format("MMMM")}
                </div>
              </div>
              <div className="calendarTime">
                <div className="calendarHr">
                  {moment(this.state.updated).format("HH:mm")}
                </div>
              </div>
            </div>
          </div>

          <div className="euroWrapper">
            <img src={header} alt="icon" />
            <img src={euroBigHeader} alt="icon" />

            <EuroEventList time={this.state.updated} />
          </div>
          <div className="copaWrapper">
            <img src={copaBigHeader} alt="icon" />

            <CopaEventList time={this.state.updated} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
