import React from "react";
import { AlertTriangle } from "lucide-react";

const alerts = [
    {
        item: "Chicken Feed",
        message: "20kg remaining",
    },
    {
        item: "Fertilizer",
        message: "5 bags left",
    },
    {
        item: "Medicine",
        message: "Low",
    },
];

const LowStockAlerts = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Low Stock Alerts
            </h2>

            <div className="space-y-3">
                {alerts.map((alert, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-100">
                            <AlertTriangle size={16} className="text-yellow-600" />
                        </div>

                        <p className="text-sm text-gray-700">
                            <span className="font-medium">{alert.item}</span> - {alert.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LowStockAlerts;