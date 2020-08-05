import React, { useState } from "react";
import Day from "./day";
import "./_day.scss";
import Input from "./input";
import "./_day.scss";
import DayForecast from "./dayforecast";

export default function Info(props) {
  const [state, setState] = useState("info");
  const [toDefine, setToDefine] = useState(false);

  function handleChanges(state, currentDate, currentDay) {
    setState(state);
    setToDefine(true);

    setTimeout(() => {
      document.getElementById("innerHTML").innerText =
        currentDate + " | " + currentDay;
    }, 0);
  }
  const forecast = props.weatherData.map((day) => (
    <Day key={day.date} eachDay={day} onclick={handleChanges} />
  ));
  for (let i = 0; i < props.weatherData.length; i++) {
    var month = props.weatherData[i].date;
    var monthString = month.toString().split("");
    var mdate = Number(monthString.splice(6, 2).join(""));
    var mmonth = Number(monthString.splice(4, 2).join(""));
    var myear = Number(monthString.splice(0, 4).join(""));
    var newmonth = new Date(myear, mmonth - 1, mdate);
    var newmonthsplit = newmonth.toString().split("");
    var monthName = newmonthsplit.splice(4, 3).join("");
  }

  return (
    <div>
      {state === "input" && <Input />}
      {state === "info" && (
        <div>
          <div className="menuBar">
            <div className="back">
              <div
                className="backArrow"
                onClick={() => setState("input")}
              ></div>
            </div>
            <div className="monthName">{monthName}</div>
            <div className="moreInfo" onClick={() => console.log(props)}></div>
          </div>
          {forecast}
        </div>
      )}
      {toDefine === true ? (
        <div>
          <div className="menuBar">
            <div className="back">
              <div
                className="backArrow"
                onClick={() => setToDefine(false)}
              ></div>
            </div>
            <div className="monthName">{monthName}</div>
            <div
              className="moreInfo"
              id="innerHTML"
              onClick={() => console.log(props)}
            >
              x
            </div>
          </div>
          <DayForecast props={state} toDefine={toDefine === true && toDefine} />
        </div>
      ) : (
        <div>
          <div className="menuBar">
            <div className="back">
              <div
                className="backArrow"
                onClick={() => setState("input")}
              ></div>
            </div>
            <div className="monthName">{monthName}</div>
            <div className="moreInfo" onClick={() => console.log(props)}></div>
          </div>
          {forecast}
        </div>
      )}
    </div>
  );
}
