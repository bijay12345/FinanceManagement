import { CloudSun, Droplets, CloudRain } from "lucide-react";

const WeatherCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <CloudSun size={36} className="text-yellow-500" />
                    <span className="text-2xl font-semibold text-gray-800">
                        28°C
                    </span>
                </div>

                <CloudSun size={36} className="text-gray-400" />
            </div>

            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <Droplets size={16} className="text-blue-500" />
                    <span>Humidity: 70%</span>
                </div>

                <div className="flex items-center gap-2">
                    <CloudRain size={16} className="text-blue-400" />
                    <span>Rain Chance: 30%</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;