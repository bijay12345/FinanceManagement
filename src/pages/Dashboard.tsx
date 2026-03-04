import { Receipt, Factory, Wallet, CircleDollarSign } from "lucide-react";
import AppLayout from "../components/layouts/AppLayout";
import TopInfoBox from "../components/utils/dashboard/TopInfoBox";

const Dashboard = () => {

  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TopInfoBox title="Total Sale" value="₹50,000" icon={<Receipt size={30} />} iconBg="bg-blue-100" iconTextColor="text-blue-600" />
        <TopInfoBox title="Total Production" value="₹30,000" icon={<Factory size={30} />} iconBg="bg-yellow-100" iconTextColor="text-yellow-600" />
        <TopInfoBox title="Total Expense" value="₹20,000" icon={<Wallet size={30} />} iconBg="bg-red-100" iconTextColor="text-red-600" />
        <TopInfoBox title="Total Income" value="₹20,000" icon={<CircleDollarSign size={30} />} iconBg="bg-green-100" iconTextColor="text-green-600" />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
