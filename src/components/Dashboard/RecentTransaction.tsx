import React from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
    {
        date: "Today",
        type: "Feed Purchase",
        amount: 1200,
        category: "expense",
    },
    {
        date: "Today",
        type: "Milk Sale",
        amount: 3000,
        category: "income",
    },
    {
        date: "Yesterday",
        type: "Medicine",
        amount: 500,
        category: "expense",
    },
    {
        date: "Yesterday",
        type: "Egg Sale",
        amount: 2200,
        category: "income",
    },
];

const RecentTransactions = () => {
    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-800">
                    Recent Transactions
                </h2>

                <button className="text-sm text-blue-600 hover:underline">
                    View All
                </button>
            </div>

            {/* Transaction List */}
            <div className="space-y-3">

                {transactions.map((item, index) => {

                    const isIncome = item.category === "income";

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition"
                        >

                            {/* Left Section */}
                            <div className="flex items-center gap-3">

                                <div
                                    className={`p-2 rounded-lg ${isIncome
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {isIncome ? (
                                        <ArrowDownLeft size={16} />
                                    ) : (
                                        <ArrowUpRight size={16} />
                                    )}
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-700">
                                        {item.type}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {item.date}
                                    </p>
                                </div>

                            </div>

                            {/* Amount */}
                            <p
                                className={`text-sm font-semibold ${isIncome
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                            >
                                {isIncome ? "+" : "-"}₹{item.amount}
                            </p>

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default RecentTransactions;