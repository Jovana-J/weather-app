import React, { useState } from "react";
import "./_day.scss";

export default function Day(props) {
  var dateString = props.eachDay.date.toString().split("");
  var date = Number(dateString.splice(6, 2).join(""));
  var month = Number(dateString.splice(4, 2).join(""));
  var year = Number(dateString.splice(0, 4).join(""));

  var newdate = new Date(year, month - 1, date);
  var newdatesplit = newdate.toString().split("");

  const forecastTitles = {
    dayTitle: newdatesplit.splice(0, 3).join(""),
    monthTitle: newdatesplit.splice(1, 3).join(""),
    dateTitle: date,
    yearTitle: year,
  };

  var wtvalues = document.getElementsByClassName("weatherType");
  var iconbg = document.getElementsByClassName("icon");
  var bg = document.getElementsByClassName("day");
  const [bgcolor, setBgcolor] = useState("");
  setTimeout(() => {
    setBgcolor("rgb(42, 42, 42)");
  }, 0);
  for (let i = 0; i < bg.length; i++) {
    var elementwtvalue = wtvalues[i].innerHTML;
    var element = bg[i];
    var elementicon = iconbg[i];
    elementicon.style.backgroundImage = `url(./icons/${elementwtvalue}.png)`;
    if (i % 2) {
      element.style.backgroundColor = bgcolor;
    }

    switch (elementwtvalue) {
      case "clear":
        wtvalues[i].innerHTML = "Clear";
        break;
      case "cloudy":
        wtvalues[i].innerHTML = "Cloudy";
        break;
      case "ishower":
        wtvalues[i].innerHTML = "Isolated showers";
        break;
      case "lightrain":
        wtvalues[i].innerHTML = "Light rain";
        break;
      case "mcloudy":
        wtvalues[i].innerHTML = "Moderate clouds";
        break;
      case "oshowers":
        wtvalues[i].innerHTML = "Occasional showers";
        break;
      case "pcloudy":
        wtvalues[i].innerHTML = "Partly cloudy";
        break;
      case "rain":
        wtvalues[i].innerHTML = "Rain";
        break;
      case "snow":
        wtvalues[i].innerHTML = "Snow";
        break;
      case "ts":
        wtvalues[i].innerHTML = "Thunderstorm possible";
        break;
      case "tsrain":
        wtvalues[i].innerHTML = "Thunderstorm";
        break;

      default:
        break;
    }
  }

  return (
    <div
      className="day"
      onClick={() => {
        props.onclick(props.eachDay, date, forecastTitles.dayTitle);
      }}
    >
      <div className="date">
        {date}
        {" | "}
        {forecastTitles.dayTitle}
      </div>
      <div className="weatherType">{props.eachDay.weather}</div>
      <div className="iconContainer">
        <div className="icon"></div>
      </div>
    </div>
  );
}
