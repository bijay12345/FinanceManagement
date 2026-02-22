import LogoutButton from "../utils/Buttons/LogoutButton";
import RedirectButton from "../utils/Buttons/RedirectButton";

const Topbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 flex items-center justify-between px-8 py-5">
      <div className="text-xl text-slate-600">Financial Overview</div>

      <div className="flex items-center gap-4">
        <RedirectButton text="Add Expense" to="/transaction" />
        <LogoutButton to="/login" />
        <div className="w-9 h-9 rounded-full bg-slate-300" />
      </div>
    </header>
  );
};

export default Topbar;
