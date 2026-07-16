import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, Car, Gauge } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";

const navItems = [
  { to: "/", label: "Overview", icon: BarChart3 },
  { to: "/predict", label: "Predict", icon: Gauge }
];

export function AppLayout({ health }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#060A12] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-[14rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/12 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[26%] h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-black/20 px-4 py-4 backdrop-blur-xl lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
          <div className="flex items-center justify-between gap-4 lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.45)]">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black">Predict AI</p>
                <p className="text-xs font-bold text-slate-500">Car price predictor</p>
              </div>
            </div>
          </div>

          <nav className="mt-5 flex gap-2 overflow-x-auto lg:mt-8 lg:block lg:space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex min-w-fit items-center gap-3 rounded-xl px-4 py-3 text-sm font-extrabold transition ${
                    isActive
                      ? "bg-cyan-300 text-slate-950 shadow-[0_0_28px_rgba(103,232,249,0.28)]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 block lg:hidden">
            <StatusBadge state={health.state} message={health.message} />
          </div>
        </aside>

        <div className="min-w-0 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
