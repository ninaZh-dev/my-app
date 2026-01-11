import { useState, useEffect } from 'react'
import './back.css'
import './app.css'
import BPChart from './BPChart.jsx'

function Tracker() {
    const [items, setItems] = useState(() => {
        const savedLogs = localStorage.getItem('bp_log');
        try {
            return savedLogs ? JSON.parse(savedLogs) : [];
        } catch (e) {
            return [];
        }
        
    });
    const [input, setInput] = useState("")

    useEffect(() => {
        localStorage.setItem('bp_log', JSON.stringify(items));
    }, [items]);

    const logInput = (e) => {
        if (e) e.preventDefault();
        if (input.trim() !== "" && input.includes("/")) {
            setItems([...items, input])
            setInput("")
        }
        else {
            alert("Please enter format as Sys/Dia");
        }
    }

    return (
        <div className="tracker-page">
            <h3>Blood Pressure Tracker (ex. 120/80)</h3>

            <form onSubmit={logInput} className="login-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g., 120/80"/>
                <button type="submit">Enter</button>
            </form>
            {items.length > 0 && <BPChart items={items} />}
            <h3 className="logs">Logs</h3>

            <ul>
                {items.slice(-3).map((item, index) => {
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