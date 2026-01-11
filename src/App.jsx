import { useState } from 'react'
import drawing from './assets/drawing2.png'
import './App.css'
import Tracker from './back.jsx'


function App() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem('streak')) || 0;
  });
  const [clicked, setClicked] = useState(false);

  const [showTracker, setShowTracker] = useState(false)

  const handleLogin = () => {
    if (!clicked) {
      const newCount = count + 1;
      setCount(newCount)
      setClicked(true)
      localStorage.setItem('streak', newCount);
    }
  };

  if (!showTracker) {
    return (
      <div className="hp-con">
        <div className="logo-link" onClick={() => setShowTracker(true)}>
          <img src={drawing} className="logo" alt="logo" />
        </div>
      <h1>HealthPal</h1>
        <div className="card">
          <button onClick={handleLogin} disabled={clicked}>
            Log-in Streak: {count}
          </button> 
          {clicked && <p>Checked in! Click the heart for your tracker.</p>}
          <p>
            Your friendly health tracker :)
          </p>
        </div>
        <p className="read-the-docs">
          We provide accurate date information, to help YOU stay happy and health!
        </p>
      </div>
    )
  }

  return (
    <div className="hp-con-back">
      <button className="back" onClick={() => setShowTracker(false)}>&lt; Back Home</button>
      <Tracker />
    </div>
  )
  
}

export default App
