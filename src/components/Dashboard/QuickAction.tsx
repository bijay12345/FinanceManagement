import React from "react";
import { PlusCircle, DollarSign, ClipboardList } from "lucide-react";

const actions = [
    {
        label: "Add Expense",
        icon: <DollarSign size={18} />,
        bg: "bg-red-100",
        text: "text-red-600",
    },
    {
        label: "Add Sale",
        icon: <PlusCircle size={18} />,
        bg: "bg-green-100",
        text: "text-green-600",
    },
    {
        label: "Add Task",
        icon: <ClipboardList size={18} />,
        bg: "bg-blue-100",
        text: "text-blue-600",
    },
];

const QuickAction = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
            </h2>

            <div className="space-y-3">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-lg ${action.bg} ${action.text}`}
                        >
                            {action.icon}
                        </div>

                        <span className="text-sm font-medium text-gray-700">
                            {action.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickAction;