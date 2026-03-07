import DashboardBody from "../components/Dashboard/DashboardBody";
import TopHeader from "../components/Dashboard/TopHeader";
import AppLayout from "../components/layouts/AppLayout";

const Dashboard = () => {

  return (
    <AppLayout>
      <TopHeader />
      <DashboardBody />
    </AppLayout>
  );
};

export default Dashboard;
