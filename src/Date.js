import React from "react";

export default function Date(props) {
  return (
    <div className="col-4 align-self-center text-center date">
      <p className="my-auto time-day-month">
        <span id="time">04:14</span>
        <br />
        <span id="day">Wednesday</span>
        <br />
        <span className="font-weight-bold" id="number">
          7
        </span>
        <br />
        <span id="month">September</span>
      </p>
    </div>
  );
}
