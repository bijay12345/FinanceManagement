import {
    ArrowUpRight,
    ShoppingCart,
    Wallet,
    AlertCircle
} from "lucide-react"

export default function RecentActivities() {
    const activities = [
        {
            icon: ShoppingCart,
            title: "New sale recorded",
            description: "Sold 15L of milk",
            time: "2 min ago",
            color: "text-green-500 bg-green-100"
        },
        {
            icon: Wallet,
            title: "Expense added",
            description: "₹1200 spent on cattle feed",
            time: "15 min ago",
            color: "text-red-500 bg-red-100"
        },
        {
            icon: ArrowUpRight,
            title: "Payment received",
            description: "₹3500 from local vendor",
            time: "1 hour ago",
            color: "text-blue-500 bg-blue-100"
        },
        {
            icon: AlertCircle,
            title: "Low stock alert",
            description: "Cattle feed running low",
            time: "3 hours ago",
            color: "text-amber-500 bg-amber-100"
        }
    ]

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

            <h3 className="text-lg font-semibold mb-4">
                Recent Activities
            </h3>

            <div className="space-y-4">

                {activities.map((activity, index) => {
                    const Icon = activity.icon

                    return (
                        <div
                            key={index}
                            className="flex items-start gap-3"
                        >

                            {/* Icon */}
                            <div
                                className={`p-2 rounded-lg ${activity.color}`}
                            >
                                <Icon size={16} />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-sm font-medium text-slate-700">
                                    {activity.title}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {activity.description}
                                </p>
                            </div>

                            {/* Time */}
                            <span className="text-xs text-slate-400">
                                {activity.time}
                            </span>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}