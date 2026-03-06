import { Egg, Bird, Origami } from "lucide-react";

const livestock = [
    {
        label: "Cows",
        count: 24,
        icon: <Origami size={18} className="text-green-600" />,
        bg: "bg-green-100",
    },
    {
        label: "Chickens",
        count: 120,
        icon: <Bird size={18} className="text-yellow-600" />,
        bg: "bg-yellow-100",
    },
    {
        label: "Eggs (Daily)",
        count: 420,
        icon: <Egg size={18} className="text-orange-600" />,
        bg: "bg-orange-100",
    },
];

const LivestockCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Livestock
            </h2>

            <div className="space-y-4">
                {livestock.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-8 h-8 flex items-center justify-center rounded-lg ${item.bg}`}
                            >
                                {item.icon}
                            </div>

                            <span className="text-sm text-gray-600">{item.label}</span>
                        </div>

                        <span className="font-semibold text-gray-800">
                            {item.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LivestockCard;