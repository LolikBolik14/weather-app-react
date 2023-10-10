import React from "react";

import SunPosition from "./SunPosition";
import "./Forecast.css";

export default function Forecast() {
  return (
    <>
      <SunPosition />
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Sat</th>
            <th scope="col">Mon</th>
            <th scope="col">Thu</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
