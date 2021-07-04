import React from 'react';
import BarCharts from './BarCharts';

function SalesAndRefund() {
    return (
        <div className="flex flex-col col-span-full sm:col-span-6 backgroundColor shadow-lg rounded-sm border  border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-center text-gray-400">Sales VS Refunds</h2>
            </header>
            <div className="px-5 py-3">
                <div className="flex items-start">
                    <div className="text-3xl font-bold text-gray-400 mr-2">+$6,796</div>
                    <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-34%</div>
                </div>
            </div>
            {/* Chart built with Chart.js 3 */}
            <div className="flex-grow">
                {/* Change the height attribute to adjust the chart height */}
                <BarCharts />
            </div>
        </div>
    );
}

export default SalesAndRefund;
