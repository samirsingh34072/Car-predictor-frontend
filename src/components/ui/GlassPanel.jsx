import React from "react";

export function GlassPanel({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
