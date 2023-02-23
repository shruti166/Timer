import React from "react";


export default function Timer({ hours, min, sec}) {
  
  return <div>
    <p>{hours}</p>
    <span>:</span>
    <p>{min}</p>
    <span>:</span>
    <p>{sec}</p>
  </div>;
}
