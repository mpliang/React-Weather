import React from "react";
// import Weather from "./Weather"

export default React.createClass({

  render() {

    return(
      <div>
          <div className="weatherapp">
            <div className="appContainer">
              <h1>weekly weather</h1>
              <input id="location" type="text" placeholder="Enter your location" autofocus className="location"/>
              <span id="instructions">Hit enter to get weather of current location</span>
            </div>
            <div className="displayCity"></div>
          </div>

          <footer className="info">
            <p>Created by Michael Liang</p>
            <p>View Source Code on <a href="https://github.com/mpliang/WeatherApp">GitHub</a></p>
          </footer>
      </div>
    )
  }
});
