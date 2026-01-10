import { useState } from 'react'
import './back.css'
import './app.css'

function Tracker() {
    const [items, setItems] = useState([])
    const [input, setInput] = useState("")


    const logInput = (e) => {
        if (e) e.preventDefault();
        if (input.trim() !== "") {
            setItems([...items, input])
            setInput("")
        }
    }

    return (
        <div className="tracker-page">
            <h3>Blood Pressure Tracker (ex. 120/80)</h3>

            <form onSubmit={logInput} className="login-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Log health activity"/>
                <button type="submit">Enter</button>
            </form>

            <h3 className="logs">Logs</h3>

            <ul>
                {items.slice(-7).map((item, index) => {
                    const [sys, dia] = item.split("/"); 
                    const sysWid = (parseInt(sys) / 200) * 100;
                    const diaWid = (parseInt(dia) / 200) * 100;

                    return (
                        <li key={index} className="log-entry">
                            <div className="log">Log {index + 1}: {item} mmHg</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Tracker