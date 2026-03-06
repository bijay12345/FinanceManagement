import { DollarSign } from "lucide-react";

const MonthlyProfit = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-100">
                    <DollarSign className="text-green-600" size={18} />
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                    Monthly Profit
                </h2>
            </div>

            {/* Profit Box */}
            <div className="bg-green-50 rounded-lg p-4 space-y-3">

                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Income:</span>
                    <span className="font-semibold text-gray-800 bg-green-100 px-3 py-1 rounded-md">
                        ₹ 1,20,000
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Expenses:</span>
                    <span className="font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-md">
                        ₹ 75,000
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Profit:</span>
                    <span className="font-semibold text-green-700 bg-green-200 px-3 py-1 rounded-md">
                        ₹ 45,000
                    </span>
                </div>

            </div>

        </div>
    );
};

export default MonthlyProfit;