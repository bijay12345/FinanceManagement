import AppLayout from "../layouts/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h1 className="text-xl font-semibold text-slate-800 mb-2">Dashboard</h1>

        <p className="text-sm text-slate-500">
          Overview of your monthly financial performance.
        </p>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
