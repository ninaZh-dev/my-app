import './back.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function BPChart ({ items }) {
    if (!items || items.length === 0) return null;
    const data = items.slice(-7).map((item, index) => {
        const [sys, dia] = item.split("/");
        return {
            name: `Log ${index + 1}`, systolic: parseInt(sys) || 0, diastolic: parseInt(dia) || 0,
        };
    });

    return (
        <div className="recharts-box" style={{ width: '100%', height:250, margin: '20px 0'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="name" hide />
                    <YAxis domain={[40, 200]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="systolic" stroke="red" strokeWidth={3} dot={{ r: 4 }} name="Systolic" />
                    <Line type="monotone" dataKey="diastolic" stroke="black" strokeWidth={3} dot={{ r: 4 }} name="Diastolic" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default BPChart;