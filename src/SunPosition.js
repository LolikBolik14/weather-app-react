import React from "react";

import "./SunPosition.css";

export default function SunPosition(props) {
  function timeUTC(timestamp) {
    let nowUtc = new Date(timestamp);
    let hoursUtc = nowUtc.getUTCHours();
    if (hoursUtc < 10) {
      hoursUtc = `0${hoursUtc}`;
    }
    let minutesUtc = nowUtc.getUTCMinutes();
    if (minutesUtc < 10) {
      minutesUtc = `0${minutesUtc}`;
    }
    return `${hoursUtc}:${minutesUtc}`;
  }

  function showSunrise() {
    let sunrise = timeUTC((props.sun[0].sunrise + props.time) * 1000);
    return `${sunrise}`;
  }

  function showSunset() {
    let sunset = timeUTC((props.sun[0].sunset + props.time) * 1000);
    return `${sunset}`;
  }

  return (
    <div className="position-sun">
      <p className="sun">
        <span className="sunrise" id="sunrise">
          Sunrise {showSunrise()}
        </span>{" "}
        <span className="sunset" id="sunset">
          Sunset {showSunset()}
        </span>
      </p>
    </div>
  );
}
