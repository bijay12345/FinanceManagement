import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"

import type { ChartOptions } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
    labels: ["Feed", "Medicine", "Maintenance", "Transport"],
    datasets: [
        {
            data: [4200, 2100, 1500, 900],
            backgroundColor: [
                "#3b82f6",
                "#22c55e",
                "#f59e0b",
                "#ef4444"
            ],
            borderWidth: 0
        }
    ]
}

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: "70%"
}

export default function ExpenseBreakdown() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Expense Breakdown</h3>
            </div>

            <div className="h-52 flex items-center justify-center">
                <Doughnut data={data} options={options} />
            </div>

            <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        Feed
                    </span>
                    <span>₹4,200</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        Medicine
                    </span>
                    <span>₹2,100</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                        Maintenance
                    </span>
                    <span>₹1,500</span>
                </div>

                <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        Transport
                    </span>
                    <span>₹900</span>
                </div>

            </div>

        </div>
    )
}