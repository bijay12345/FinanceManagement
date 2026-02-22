
const AuthSidebar = () => {
    return (

        <div className="hidden lg:flex flex-col justify-between bg-[#1A2CA3] text-white p-16">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">
                    BudgetFlow
                </h1>
            </div>

            <div className="max-w-md">
                <h2 className="text-4xl font-semibold leading-tight mb-6">
                    Modern financial control for growing teams.
                </h2>
                <p className="text-white/80 text-lg">
                    Monitor budgets, track expenses, and receive automated threshold alerts — all in one secure platform.
                </p>
            </div>

            <div className="text-sm text-white/60">
                © 2026 BudgetFlow Inc.
            </div>
        </div>

    )
}

export default AuthSidebar