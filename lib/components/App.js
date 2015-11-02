import React from "react";
import API from "../API"

export default React.createClass({
  eventListener(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      let weather = {};
      Object.keys(this.refs).forEach(key => weather[key] = this.refs[key].value);
      API.getWeather(weather.location);
    }
  },

  render() {

    return(
      <div>
          <div className="weatherapp">
            <div className="appContainer">
              <h1>weekly weather</h1>
              <input id="location" type="text" placeholder="Enter your location" autofocus className="location" ref="location" onKeyUp={this.eventListener}/>
              <span id="instructions">Hit enter to get weather of current location</span>
            </div>
            <div className="displayCity"></div>
          </div>

          <footer className="info">
            <p>Created by Michael Liang</p>
            <p>View Source Code on <a href="https://github.com/mpliang/React-Weather">GitHub</a></p>
          </footer>
      </div>
    )
  }
});
