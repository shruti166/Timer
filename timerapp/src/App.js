import { useState } from 'react';
import Timer from './components/Timer';
import './App.css';

function App() {
    const [days, setDays] = useState(10);
    const [hours, setHours] = useState(10);
    const [min, setMin] = useState(10);
    const [sec, setSec] = useState(10);
  return (
    <div className="App">
     <Timer days = {days} hours = {hours} min = {min} sec = {sec}/>
    </div>
  );
}

export default App;
