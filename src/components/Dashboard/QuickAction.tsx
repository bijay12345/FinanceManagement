import React from "react";
import { PlusCircle, DollarSign } from "lucide-react";

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
];

const QuickAction = () => {
    return (
        <div className="mb-6">

            <div className="flex flex-wrap gap-3 mt-3">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-3 px-4 py-2.5
                bg-white/70 backdrop-blur-sm
                border border-gray-200
                rounded-lg
                hover:bg-white hover:shadow-sm
                transition-all duration-200
                cursor-pointer"
                    >
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-md
                    ${action.bg} ${action.text}`}
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