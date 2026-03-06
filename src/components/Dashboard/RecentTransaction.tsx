import React from "react";

const transactions = [
    {
        date: "Today",
        type: "Feed",
        amount: "₹1,200",
    },
    {
        date: "Today",
        type: "Milk Sale",
        amount: "₹3,000",
    },
    {
        date: "Yesterday",
        type: "Medicine",
        amount: "₹500",
    },
    {
        date: "Yesterday",
        type: "Eggs Sale",
        amount: "₹2,200",
    },
];

const RecentTransactions = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Transactions
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-gray-500 text-left border-b">
                            <th className="pb-2 font-medium">Date</th>
                            <th className="pb-2 font-medium">Type</th>
                            <th className="pb-2 font-medium text-right">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        {transactions.map((item, index) => (
                            <tr key={index} className="border-b last:border-none">
                                <td className="py-2">{item.date}</td>
                                <td className="py-2">{item.type}</td>
                                <td className="py-2 text-right font-medium">
                                    {item.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentTransactions;