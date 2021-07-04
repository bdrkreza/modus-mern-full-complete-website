import DeviceChart from "./DeviceChart";
const TopDevice = () => {
    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 backgroundColor shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-2xl text-center text-gray-400">Top Countries</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            <DeviceChart />
        </div>
    );
};

export default TopDevice;