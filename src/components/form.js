import React from "react";
import "./_form.scss";

export default function Form(props) {
  function inputStylelatitude() {
    var inputTextlatitude = document.getElementsByClassName(
      "latitudeBorder"
    )[0];
    inputTextlatitude.style.width = "100vw";
    inputTextlatitude.style.transitionDuration = "500ms";
    inputTextlatitude.style.transitionTimingFunction = "ease-in";
  }
  function inputStylelongitude() {
    var inputTextlongitude = document.getElementsByClassName(
      "latitudeBorder"
    )[0];
    inputTextlongitude.style.width = "50vw";
    inputTextlongitude.style.transitionDuration = "500ms";
    inputTextlongitude.style.transitionTimingFunction = "ease-in";
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="img">
          <div className="imgIcon"></div>
        </div>
        <input
          className="longitude"
          type="text"
          name="longitude"
          placeholder="Enter Longitude"
          onChange={props.handleChange}
          value={props.stateProps.longitude}
          onInput={() => inputStylelongitude()}
        />
        <div className="longitudeBorder"></div>
        <div className="longitudeBackground"></div>
        <input
          className="latitude"
          type="text"
          name="latitude"
          placeholder="Enter Latitude "
          onChange={props.handleChange}
          value={props.stateProps.latitude}
          onInput={() => inputStylelatitude()}
        />
        <div className="latitudeBorder"></div>
        <div className="latitudeBackground"></div>
        <input
          className="button"
          type="button"
          value="Get Forecast"
          onClick={props.fetchWeatherData}
        />
      </div>
    </div>
  );
}
