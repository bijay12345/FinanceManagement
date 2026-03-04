import { NavLink } from "react-router-dom";
import Logo from "../utils/banner/Logo";
import { ChartColumnDecreasing, Home } from "lucide-react";
import type { ReactNode } from "react";

interface NavItemProps { to: string; label: string, icon?: ReactNode }

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      <div className="px-6 pb-6">
        <Logo />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" label="Dashboard" icon={<Home size={20} />} />
        <NavItem to="/statistics" label="Statistics" icon={<ChartColumnDecreasing size={20} />} />

      </nav>
    </aside>
  );
};

const NavItem = ({ to, label, icon }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-[16px] font-medium transition-colors
    ${isActive
          ? "bg-[#e2e5f9] text-[#1A2CA3]"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
