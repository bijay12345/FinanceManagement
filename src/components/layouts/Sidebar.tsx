import { NavLink } from "react-router-dom";
import RedirectLink from "../utils/RedirectLink";

interface NavItemProps { to: string; label: string }

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="px-6 py-6">
        <RedirectLink text="BudgetFlow" to="/dashboard" textSize="xl" />
        <h1 className="text-xl font-semibold text-slate-800">BudgetFlow</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/statistics" label="Statistics" />

      </nav>
    </aside>
  );
};

const NavItem = ({ to, label }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg text-sm font-medium transition
        ${isActive
          ? "bg-slate-100 text-[#1A2CA3]"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default Sidebar;
