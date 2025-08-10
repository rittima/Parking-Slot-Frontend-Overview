import { LogIn, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1 p-6 min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-yellow-700">
          Dashboard Overview
        </h1>
        <div className="flex gap-3">
          <NavLink
            to="/entry"
            className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md transition"
          >
            <LogIn size={18} /> Entry Gate
          </NavLink>
          <NavLink
            to="/exit"
            className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md transition"
          >
            <LogOut size={18} /> Exit Gate
          </NavLink>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Users", value: "1,245" },
          { title: "Slot Available", value: "13" },
          { title: "Slot Occupied", value: "27" },
          { title: "Revenue", value: "₹56,890" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition"
          >
            <h3 className="text-sm text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold text-yellow-700">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-yellow-700 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm text-gray-700">
              <span>User John Doe booked Slot #14</span>
              <span className="text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-700">
              <span>Project Alpha updated</span>
              <span className="text-gray-500">5 hours ago</span>
            </li>
            <li className="flex justify-between text-sm text-gray-700">
              <span>Admin added a new user</span>
              <span className="text-gray-500">Yesterday</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-yellow-700 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md transition">
              Manage Users
            </button>
            <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md transition">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
