import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';



let COLORS = ['#342D7E', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

let pieData = [
    {
        "name": "Iphone",
        "value": 68.85
    },
    {
        "name": "Samsung",
        "value": 7.91
    },
    {
        "name": "Edge",
        "value": 6.85
    },
    {
        "name": "Internet Browser",
        "value": 6.14
    },
    {
        "name": "Others",
        "value": 10.25
    }
];

let CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
        );
    }

    return null;
};

const DeviceChart = () => {
    return (
        <div>
            <PieChart width={730} height={300} className="mr-32">
                <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="25%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </div>
    );
};

export default DeviceChart;