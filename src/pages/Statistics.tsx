import ExpenseBreakdown from "../components/Dashboard/ExpenseBreakdown";
import MonthlyProfit from "../components/Dashboard/MonthlyProfit";
import RecentTransactions from "../components/Dashboard/RecentTransaction";
import SalesOverview from "../components/Dashboard/SalesOverview";
import AppLayout from "../components/layouts/AppLayout";


const Statistics = () => {
  return (
    <AppLayout>
      <>

        <div className="max-w-screen-2xl py-6 grid grid-cols-12 gap-6">

          {/* LEFT COLUMN */}
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <SalesOverview />

            <RecentTransactions />

          </div>


          {/* RIGHT COLUMN */}
          <div className="col-span-12 xl:col-span-4 space-y-6">

            <ExpenseBreakdown />
            <MonthlyProfit />
          </div>

        </div>
      </>
    </AppLayout>
  );
};

export default Statistics;
