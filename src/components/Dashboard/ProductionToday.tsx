import { Milk, Egg, Wheat, PawPrint } from "lucide-react";

export default function ProductionToday() {
    const data = [
        {
            label: "Milk Collected",
            value: "320 L",
            icon: <Milk size={18} className="text-blue-500" />,
            bg: "bg-blue-100",
        },
        {
            label: "Eggs Produced",
            value: "420",
            icon: <Egg size={18} className="text-yellow-500" />,
            bg: "bg-yellow-100",
        },
        {
            label: "Vegetables Harvested",
            value: "120 kg",
            icon: <Wheat size={18} className="text-orange-500" />,
            bg: "bg-orange-100",
        },
        {
            label: "Animals Fed",
            value: "52",
            icon: <PawPrint size={18} className="text-green-500" />,
            bg: "bg-green-100",
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Production Today
            </h2>

            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-lg ${item.bg}`}
                            >
                                {item.icon}
                            </div>

                            <span className="text-sm text-gray-600">{item.label}</span>
                        </div>

                        <span className="font-semibold text-gray-800">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}