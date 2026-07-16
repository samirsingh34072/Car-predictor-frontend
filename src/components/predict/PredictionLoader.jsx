import React from "react";
import { Car, Gauge, Sparkles } from "lucide-react";

export function PredictionLoader({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-xl">
      <div className="relative w-full max-w-lg rounded-[2rem] border border-cyan-300/20 bg-white/[0.06] p-8 text-center shadow-[0_0_100px_rgba(34,211,238,0.22)]">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_10%,rgba(103,232,249,0.22),transparent_42%)]" />
        <div className="relative">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_70px_rgba(103,232,249,0.35)]">
            <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-cyan-300/20 border-t-cyan-200">
              <Car className="h-8 w-8 animate-pulse text-cyan-100" />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Gauge className="h-6 w-6 animate-pulse text-cyan-200" />
            <h2 className="text-3xl font-black text-white">Calculating value</h2>
            <Sparkles className="h-6 w-6 animate-bounce text-fuchsia-200" />
          </div>
          <p className="mx-auto mt-4 max-w-sm text-sm font-semibold leading-6 text-slate-400">
            Comparing condition, city, usage, power, ownership, and market price signals.
          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-1/2 animate-[loaderSweep_1.1s_ease-in-out_infinite] rounded-full bg-cyan-300 shadow-[0_0_26px_rgba(103,232,249,0.85)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
