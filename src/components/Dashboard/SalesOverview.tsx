import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler,
    type ChartOptions
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
)

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Sales",
            data: [3200, 3500, 3000, 4200, 5100, 4600, 5200],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.15)",
            tension: 0.4,
            fill: true
        }
    ]
}

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        x: {
            grid: { display: false }
        },
        y: {
            grid: { color: "#f1f5f9" },
            ticks: {
                callback: (value) => `₹${value}`
            }
        }
    }
}
export default function SalesOverview() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="font-semibold text-lg">Sales Overview</h3>
                    <p className="text-sm text-slate-500">Sales (Last 7 Days)</p>
                </div>

                <div className="flex gap-2">
                    <button className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded">
                        Month
                    </button>
                    <button className="text-sm px-3 py-1 text-slate-500">
                        Week
                    </button>
                </div>
            </div>

            <div className="h-64">
                <Line data={data} options={options} />
            </div>

        </div>
    )
}