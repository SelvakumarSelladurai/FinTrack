import {useState} from "react";

import { FaBars, FaTimes, FaWallet, FaChartPie, FaCreditCard, FaCalendarAlt, FaCog, FaQuestionCircle, FaExchangeAlt, FaRobot, FaRegChartBar, FaTasks, FaMoneyBillWave, FaPiggyBank } from "react-icons/fa";
import { MdDashboard, MdOutlineAccountBalance, MdOutlineSync } from "react-icons/md";

import useSidebarStore from "../../store/useSidebarStore";

export default function Sidebar() {
    const { isOpen , toggleSidebar } = useSidebarStore();
    const [ active, setActive ] = useState("Overview");

    const menuItems = [
    { title: "Dashboard", icon: <MdDashboard /> },
    { title: "Wallets", icon: <FaWallet /> },
    { title: "Transactions", icon: <FaExchangeAlt /> },
    { title: "Budgets", icon: <FaMoneyBillWave /> },
    { title: "Reports / Charts", icon: <FaRegChartBar /> },
    { title: "Accounts", icon: <MdOutlineAccountBalance /> },
  ];

  const financeTools = [
    { title: "Scheduled Transactions", icon: <FaTasks /> },
    { title: "Credit Cards", icon: <FaCreditCard /> },
    { title: "Debts / Loans", icon: <FaPiggyBank /> },
    { title: "Calendar", icon: <FaCalendarAlt /> },
    { title: "Goals / Investments", icon: <FaChartPie /> },
  ];

  const systemItems = [
    { title: "Import / Export", icon: <MdOutlineSync /> },
    { title: "Settings", icon: <FaCog /> },
    { title: "Help", icon: <FaQuestionCircle /> },
  ];

  return (
    <>
    <div className = "lg:hidden fixed top-4 left-4 z-50">
        <button
        onClick = {toggleSidebar}
        className = "byn btn-sm btn-ghost text-xl">
            {isOpen ? <FaTimes/> : <FaBars/>}
        </button>
    </div>

    <aside
        className={`fixed top-0 left-0 h-full bg-base-200 shadow-lg transition-all duration-300 z-40 ${
          isOpen ? "w-64" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 p-4 border-b border-base-300">
            <FaWallet className="text-primary text-2xl" />
            {isOpen && <h1 className="text-xl font-bold">FinTrack</h1>}
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <p className="text-xs text-gray-400 uppercase mb-2">Main Menu</p>
            {menuItems.map((item) => (
              <div
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  active === item.title
                    ? "bg-primary text-white"
                    : "hover:bg-base-300 text-gray-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && <span>{item.title}</span>}
              </div>
            ))}

            <p className="text-xs text-gray-400 uppercase mt-4 mb-2">Finance Tools</p>
            {financeTools.map((item) => (
              <div
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  active === item.title
                    ? "bg-primary text-white"
                    : "hover:bg-base-300 text-gray-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && <span>{item.title}</span>}
              </div>
            ))}

            <p className="text-xs text-gray-400 uppercase mt-4 mb-2">AI Assistant</p>
            <div
              onClick={() => setActive("AI Assistant")}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                active === "AI Assistant"
                  ? "bg-primary text-white"
                  : "hover:bg-base-300 text-gray-700"
              }`}
            >
              <FaRobot className="text-lg" />
              {isOpen && <span>AI Assistant</span>}
            </div>

            <p className="text-xs text-gray-400 uppercase mt-4 mb-2">System</p>
            {systemItems.map((item) => (
              <div
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  active === item.title
                    ? "bg-primary text-white"
                    : "hover:bg-base-300 text-gray-700"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && <span>{item.title}</span>}
              </div>
            ))}
          </nav>

          <div className="text-center text-xs p-3 border-t border-base-300 text-gray-400">
            {isOpen ? "FinTrack © 2025" : "©"}
          </div>
        </div>
      </aside>
    </>
  )

}