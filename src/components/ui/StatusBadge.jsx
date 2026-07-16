import React from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const styles = {
  checking: "border-amber-300/30 bg-amber-300/10 text-amber-100 shadow-[0_0_28px_rgba(245,185,64,0.16)]",
  connected: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.20)]",
  offline: "border-rose-300/30 bg-rose-400/10 text-rose-100 shadow-[0_0_26px_rgba(244,63,94,0.16)]"
};

export function StatusBadge({ state, message }) {
  const Icon = state === "connected" ? CheckCircle2 : state === "checking" ? Loader2 : AlertCircle;

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-bold ${styles[state] || styles.offline}`}>
      <Icon className={`h-4 w-4 ${state === "checking" ? "animate-spin" : ""}`} />
      {message}
    </span>
  );
}
