import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import "./App.css";
const date = new Date();
function App() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [hours, setHours] = useState(date.getHours());
  const [min, setMin] = useState(date.getMinutes());
  const [sec, setSec] = useState(date.getSeconds());
  const [day, setDay] = useState(weekday[date.getDay()]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMin(date.getMinutes());
      setSec(date.getSeconds());
      setDay(weekday[date.getDay()]);
    }, 1000);
    return () => clearInterval(timer);

  });

  console.log(day, hours, min, sec);
  return (
    <div className="App">
      <Timer day = {day} hours={hours} min={min} sec={sec} />
      
    </div>
  );
}

export default App;
