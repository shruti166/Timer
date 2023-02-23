import React from "react";
import "../App.css";


export default function Timer({ hours, min, sec}) {
  
  return <div className="timer">
    <div><p>{hours}</p></div>
    <div><span> : </span></div>
    <div><p>{min}</p></div>
    <div><span> : </span></div>
    <div><p>{sec}</p></div>
  </div>;
}
