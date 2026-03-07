import ProductionToday from "./ProductionToday"
import RecentActivities from "./RecentActivities"
import TasksToday from "./TaskToday"
import LowStockAlerts from "./LowStockAlerts";
import LivestockCard from "./LivestockCard";


const DashboardBody = () => {
    return (
        <>
            <div className="space-y-6 mt-4">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <ProductionToday />
                    <LowStockAlerts />
                    <LivestockCard />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <RecentActivities />
                    <TasksToday />
                </div>
            </div>
        </>
    )
}

export default DashboardBody