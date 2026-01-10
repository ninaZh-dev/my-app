import { useState } from 'react'

function Tracker() {
    const [items, setItems] = useState([])
    const [input, setInput] = useState("")

    const logInput = () => {
        if (input.trim() !== "") {
            setItems([...items, input])
            setInput("")
        }
    }

    return (
        <div>
            <h3>Blood Pressure Tracker</h3>

            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Log health activity"/>
        <button onClick={logInput}>Enter</button>
        <h3>Logs</h3>

        <ul>
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
        </div>
    )
}

export default Tracker