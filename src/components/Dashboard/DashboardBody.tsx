import ExpenseBreakdown from "./ExpenseBreakdown"
import LivestockCard from "./LivestockCard"
import LowStockAlerts from "./LowStockAlerts"
import MonthlyProfit from "./MonthlyProfit"
import ProductionToday from "./ProductionToday"
import QuickAction from "./QuickAction"
import RecentTransactions from "./RecentTransaction"
import SalesOverview from "./SalesOverview"
import TasksToday from "./TaskToday"
import WeatherCard from "./WeatherCard"

const DashboardBody = () => {
    return (
        <>
            <div className="max-w-8xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

                {/* LEFT COLUMN */}
                <div className="col-span-12 xl:col-span-6 space-y-6">

                    <div className="grid md:grid-cols-2 gap-6">
                        <ProductionToday />
                        <ExpenseBreakdown />
                    </div>

                    <SalesOverview />

                    <RecentTransactions />

                </div>


                {/* MIDDLE COLUMN */}
                <div className="col-span-12 xl:col-span-3 space-y-6">

                    <TasksToday />

                    <LowStockAlerts />

                    <WeatherCard />

                </div>


                {/* RIGHT COLUMN */}
                <div className="col-span-12 xl:col-span-3 space-y-6">

                    <MonthlyProfit />

                    <LivestockCard />

                    <QuickAction />

                </div>

            </div>
        </>
    )
}

export default DashboardBody