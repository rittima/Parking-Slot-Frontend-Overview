import { NavLink } from "react-router-dom";
import { LayoutDashboard, History, CheckCircle, LogIn, LogOut } from "lucide-react";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-600 text-white font-medium shadow-md transition-all duration-200"
      : "flex items-center gap-3 px-4 py-2 rounded-lg text-yellow-900 hover:bg-yellow-500 hover:text-white transition-all duration-200";

  return (
    <aside className="w-[260px] bg-yellow-400 min-h-screen p-5 flex flex-col shadow-lg">
      {/* Logo / Title */}
      <div className="mb-8">
        <h2 className="text-lg font-bold tracking-wide text-yellow-900">
          SLOT MANAGEMENT
        </h2>
        <div className="w-20 h-[3px] bg-yellow-900 mt-1 rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2 font-bold">
        <li>
          <NavLink to="/" className={linkClasses}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/entry" className={linkClasses}>
            <LogIn size={18} /> Entry Gate
          </NavLink>
        </li>
        <li>
          <NavLink to="/exit" className={linkClasses}>
            <LogOut size={18} />  Exit Gate
          </NavLink>
        </li>
        <li>
          <NavLink to="/available-slot" className={linkClasses}>
            <CheckCircle size={18} />  Slots Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" className={linkClasses}>
            <History size={18} /> History
          </NavLink>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-auto pt-6 text-xs text-yellow-900 border-t border-yellow-500">
        © {new Date().getFullYear()} Slot Manager
      </div>
    </aside>
  );
};

export default Sidebar;
