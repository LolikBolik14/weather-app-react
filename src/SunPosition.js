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
        Sunrise {showSunrise()}
        <span className="sunrise" id="sunrise"></span> Sunset {showSunset()}
        <span className="sunset" id="sunset"></span>
      </p>
    </div>
  );
}
