import ProductionToday from "./ProductionToday"
import RecentActivities from "./RecentActivities"
import TasksToday from "./TaskToday"
import WeatherCard from "./WeatherCard"


const DashboardBody = () => {
    return (
        <>
            <div className="space-y-6 mt-3">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <RecentActivities />
                    <TasksToday />
                </div>

                {/* Middle Stats */}
                <ProductionToday />

                {/* Bottom Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <WeatherCard />
                </div>

            </div>
        </>
    )
}

export default DashboardBody