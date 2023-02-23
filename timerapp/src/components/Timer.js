import React from "react";
import "../App.css";

export default function Timer({ day, hours, min, sec }) {
  return (
    <div className="main">
      <div className="day">
        <h3>Hello there ! It's {day}</h3>
      </div>
      <div className="timer">
        <div>
          <p>{hours}</p>
        </div>
        <div>
          <span> : </span>
        </div>
        <div>
          <p>{min}</p>
        </div>
        <div>
          <span> : </span>
        </div>
        <div>
          <p>{sec}</p>
        </div>
      </div>
      
    </div>
  );
}
