import React from "react";
import "./_form.scss";

export default function Loader(props) {
  return (
    <div className="loaderContainer" onClick={() => console.log(props)}>
      <div className="circleLoad">
        <div className="loader"></div>
      </div>
    </div>
  );
}
