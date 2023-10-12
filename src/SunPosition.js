import React from "react";

import "./SunPosition.css";

export default function SunPosition() {
  return (
    <div className="position-sun">
      <p className="sun">
        Sunrise <span className="sunrise" id="sunrise"></span> Sunset
        <span className="sunset" id="sunset"></span>
      </p>
    </div>
  );
}
