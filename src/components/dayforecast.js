import React, { useEffect } from "react";
import "./_day.scss";

export default function DayForecast(props) {
  useEffect(() => {
    switch (props.props.wind10m_max) {
      case 1:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML =
          "Below";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "0.3";
        document.getElementsByClassName("description")[0].innerHTML = "Calm";
        break;
      case 2:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "0.3";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "3.4";
        document.getElementsByClassName("description")[0].innerHTML = "Light";
        break;
      case 3:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "3.4";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "8.0";
        document.getElementsByClassName("description")[0].innerHTML =
          "Moderate";
        break;
      case 4:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "8.0";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "10.8";
        document.getElementsByClassName("description")[0].innerHTML = "Fresh";
        break;
      case 5:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "10.8";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "17.2";
        document.getElementsByClassName("description")[0].innerHTML = "Strong";
        break;
      case 6:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "17.2";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "24.5";
        document.getElementsByClassName("description")[0].innerHTML = "Gale";
        break;
      case 7:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "24.5";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "32.6";
        document.getElementsByClassName("description")[0].innerHTML = "Storm";
        break;
      case 8:
        document.getElementsByClassName("mpersecondFrom")[0].innerHTML = "32.6";
        document.getElementsByClassName("mpersecondTo")[0].innerHTML = "Over";
        document.getElementsByClassName("description")[0].innerHTML =
          "Hurricane";
        break;

      default:
        break;
    }
  });
  return (
    <div>
      <div className="DayForecastContainer">
        <div className="iconContains">
          <div
            className="iconLarge"
            style={{
              backgroundImage: `url(./icons/${props.props.weather}.png)`,
            }}
          ></div>
        </div>
        <div className="typeWeather">
          {props.props.weather === "clear" && "Clear"}
          {props.props.weather === "cloudy" && "Cloudy"}
          {props.props.weather === "ishower" && "Isolated showers"}
          {props.props.weather === "lightrain" && "Light rain"}
          {props.props.weather === "mcloudy" && "Moderate clouds"}
          {props.props.weather === "oshowers" && "Occasional showers"}
          {props.props.weather === "pcloudy" && "Partly cloudy"}
          {props.props.weather === "rain" && "Rain"}
          {props.props.weather === "snow" && "Snow"}
          {props.props.weather === "ts" && "Thunderstorm possible"}
          {props.props.weather === "tsrain" && "Thunderstorm"}
        </div>
        <div className="celsiusTitle">celsius</div>
        <div className="tempminTitle">Min</div>
        <div className="tempmaxTitle">Max</div>
        <div className="tempmin">
          {props.toDefine === true && props.props.temp2m.min}
        </div>
        <div className="tempmax">
          {props.toDefine === true && props.props.temp2m.max}
        </div>
        <div className="description"></div>
        <div className="winds">wind m/s</div>
        <div className="mpersecondFrom"></div>
        <div className="mpersecondTo"></div>
      </div>
    </div>
  );
}
