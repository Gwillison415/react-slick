import React, { Component } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
  // Used for rendering
  state = {
    locations: [...this.props.locations],
  };
  getClasses = (ctx, index) => {
    let classes = `material-icons ${ctx}`;
    if (ctx === "dots") {
      if (this.isLast(index)) {
        classes += " hidden";
      }
    } else {
      classes += this.isLast(index) ? " small" : " x-small";
      if (index === 0) {
        classes += " first";
      }
    }
    return classes;
  };

  // Used for rendering
  isLast = (index) => {
    return index === this.props.locations.length + 1;
  };
  isFirst = (index) => {
    return index === 0;
  };
  pushUp = (index) => {
    let { locations } = this.state;
    let movingUp = locations[index];
    let movingDown = locations[index - 1];
    locations[index] = movingDown;
    locations[index - 1] = movingUp;
    this.setState({ locations });
  };
  pushDown = (index) => {
    let { locations } = this.state;
    let movingUp = locations[index];
    let movingDown = locations[index + 1];
    locations[index] = movingDown;
    locations[index + 1] = movingUp;
    this.setState({ locations });
  };

  render() {
    const { locations } = this.state;
    return (
      <div className="layout-row align-items-center justify-content-center navigation-screen">
        <div className="card layout-row flat map-card">
          <section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
            <ul className="pl-0" data-testid="location-list">
              {/*Use this li for rendering each location item as it contains all the data-testid attributes required for the tests to pass*/}

              {locations.map((location, index) => {
                return (
                  <li
                    key={"row" + index}
                    data-testid={"location-" + index}
                    className="layout-row justify-content-between align-items-center mr-8 pl-40 relative"
                  >
                    <div className="layout-column justify-content-start align-items-center handle">
                      <i className={this.getClasses("marker", index)}>
                        {this.isLast(index) ? "room" : "radio_button_checked"}
                      </i>
                      <i className={this.getClasses("dots", index)}>
                        more_vert
                      </i>
                    </div>
                    <div className="location-name">
                      <p
                        className="caption text-start mb-4"
                        data-testid="location"
                      >
                        {location}
                      </p>
                    </div>
                    <div>
                      {!this.isFirst(index) && (
                        <button
                          onClick={() => this.pushUp(index)}
                          className="icon-only small mx-0"
                          data-testid="up-button"
                        >
                          <i className="material-icons">arrow_upward</i>
                        </button>
                      )}
                      {!this.isLast(index + 2) && (
                        <button
                          onClick={() => this.pushDown(index)}
                          className="icon-only small mx-0"
                          data-testid="down-button"
                        >
                          <i className="material-icons">arrow_downward</i>
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="flex-auto">
            <img src="images/map.svg" className="fill" alt="map" />
          </section>
        </div>
      </div>
    );
  }
}
