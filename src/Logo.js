import React from "react";

import "./Logo.css";

export default function Logo() {
  return (
    <div className="d-md-inline-block logo">
      <h1 className="logo-title">
        WEA
        <img src="images/logo.png" alt="logo weather" className="img-logo" />
        THER
      </h1>
    </div>
  );
}
