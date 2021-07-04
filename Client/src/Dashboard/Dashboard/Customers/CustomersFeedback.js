import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 200,
        amt: 200,
    },
    {
        name: 'Page B',
        uv: 1800,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const myStyle = {
    background: '#0a183d'
}
const CustomersFeedback = () => {

    return (
        <div>
            <div class="min-w-screen min-s-screen bg-gray-900 flex items-center justify-center px-1 py-5 ">
                <div class="w-full max-w-3xl">
                    <div class="-mx-2 md:flex">
                        <div class="w-full md:w-1/3 px-2 ">
                            <div class="rounded-lg shadow-sm mb-4">
                                <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden" style={myStyle}>
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm uppercase text-gray-300 leading-tight">Users</h4>
                                        <h3 class="text-3xl text-gray-400 font-semibold leading-tight my-3">3,682</h3>
                                        <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <div style={{ width: '100%', height: 50 }}>
                                            <ResponsiveContainer>
                                                <AreaChart
                                                    data={data}
                                                    margin={{
                                                        top: 10,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2" >
                            <div class="rounded-lg shadow-sm mb-4">
                                <div class="rounded-lg shadow-lg md:shadow-xl relative overflow-hidden" style={myStyle}>
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm uppercase text-gray-300 leading-tight">Subscribers</h4>
                                        <h3 class="text-3xl text-gray-400 font-semibold leading-tight my-3">11,427</h3>
                                        <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <div style={{ width: '100%', height: 50 }}>
                                            <ResponsiveContainer>
                                                <AreaChart
                                                    data={data}
                                                    margin={{
                                                        top: 10,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-2">
                            <div class="rounded-lg shadow-sm mb-4">
                                <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden" style={myStyle}>
                                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                                        <h4 class="text-sm uppercase text-gray-300 leading-tight">Comments</h4>
                                        <h3 class="text-3xl text-gray-400 font-semibold leading-tight my-3">8,028</h3>
                                        <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                                    </div>
                                    <div class="absolute bottom-0 inset-x-0">
                                        <div style={{ width: '100%', height: 50 }}>
                                            <ResponsiveContainer>
                                                <AreaChart
                                                    data={data}
                                                    margin={{
                                                        top: 10,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                    }}
                                                >
                                                    <Tooltip />
                                                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersFeedback;