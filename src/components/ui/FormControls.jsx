import React from "react";

export function Field({ label, icon: Icon, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-300">
        {Icon ? <Icon className="h-4 w-4 text-cyan-300" /> : null}
        {label}
      </span>
      {children}
    </label>
  );
}

const controlClass = "h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm font-semibold text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-4 focus:ring-cyan-300/10";

export function TextInput(props) {
  return <input {...props} className={controlClass} />;
}

export function SelectInput({ children, ...props }) {
  return (
    <select {...props} className={controlClass}>
      {children}
    </select>
  );
}
