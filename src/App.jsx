import { useState } from 'react'
import drawing from './assets/drawing2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="drawing2.png" target="_blank">
          <img src={drawing} className="logo" alt="logo" />
        </a>
      </div>
      <h1>HealthPal</h1>
      <div className="card">
        <button onClick="this.loginTrack=true">
          Log-in Streak: {count}
        </button>
        <p>
          Your friendly health tracker :)
        </p>
      </div>
      <p className="read-the-docs">
        We provide the most up to date information, to help YOU stay happy and health!
      </p>
    </>
  )
}

export default App
