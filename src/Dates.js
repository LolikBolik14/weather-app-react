import React from "react";

import "./Dates.css";

export default function Dates(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.defaultDate.getDay()];
  let month = months[props.defaultDate.getMonth()];
  let hours = props.defaultDate.getHours();
  let minutes = props.defaultDate.getMinutes();
  let number = props.defaultDate.getDate();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="col-4 align-self-center text-center dateFormat">
      <p className="my-auto time-day-month">
        <span id="time">
          {hours}:{minutes}
        </span>
        <br />
        <span id="weekday">{day}</span>
        <br />
        <span className="font-weight-bold" id="number">
          {number}
        </span>
        <br />
        <span id="month">{month}</span>
      </p>
    </div>
  );
}
