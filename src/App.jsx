import { useState } from 'react'
import drawing from './assets/drawing2.png'
import './App.css'
import Tracker from './back.jsx'
import BPChart from './BPChart.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [showTracker, setShowTracker] = useState(false)

  const handleClick = () => {
    if (!clicked) {
      setCount(count + 1)
      setClicked(true)
    }
  }

  if (!showTracker) {
    return (
      <div className="hp-con">
        <div className="logo-link" onClick={() => setShowTracker(true)}>
          <img src={drawing} className="logo" alt="logo" />
        </div>
      <h1>HealthPal</h1>
        <div className="card">
          <button onClick={handleClick} disabled={clicked}>
            Log-in Streak: {count}
          </button> 
          {clicked && <p>You've logged in! Click the heart to go to your tracker.</p>}
          <p>
            Your friendly health tracker :)
          </p>
        </div>
        <p className="read-the-docs">
          We provide the most up to date information, to help YOU stay happy and health!
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
