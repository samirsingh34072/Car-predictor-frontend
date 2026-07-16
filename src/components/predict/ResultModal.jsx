import React from "react";
import { CheckCircle2, IndianRupee, RotateCcw, X } from "lucide-react";
import { formatCurrency } from "../../utils/formatters";

export function ResultModal({ prediction, form, onClose, onReset }) {
  if (!prediction) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-xl">
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#08111F] p-6 text-white shadow-[0_0_120px_rgba(34,211,238,0.26)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.22),transparent_42%)]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
          aria-label="Close result"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-[0_0_48px_rgba(103,232,249,0.42)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <p className="mt-6 text-sm font-black uppercase text-cyan-200">Estimate Ready</p>
          <h2 className="mt-2 text-3xl font-black">Your car price estimate</h2>
          <p className="mt-3 text-sm font-semibold text-slate-400">{form.Name}</p>

          <div className="mt-7 rounded-3xl border border-white/10 bg-slate-950/70 p-7">
            <div className="flex items-center justify-center gap-2 text-cyan-200">
              <IndianRupee className="h-6 w-6" />
              <span className="text-sm font-black uppercase">Predicted new price</span>
            </div>
            <p className="mt-4 text-6xl font-black tracking-tight text-white">
              {prediction.predicted_new_price_lakh}L
            </p>
            <p className="mt-3 text-lg font-black text-cyan-100">
              {formatCurrency(prediction.predicted_new_price_rupees)}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-left">
            <MiniStat label="City" value={form.Location} />
            <MiniStat label="Fuel" value={form.Fuel_Type} />
            <MiniStat label="Owner" value={form.Owner_Type} />
          </div>

          <button
            type="button"
            onClick={onReset}
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.34)] transition hover:bg-cyan-200"
          >
            <RotateCcw className="h-4 w-4" />
            Check Another Car
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs font-black uppercase text-slate-500">{label}</p>
      <p className="mt-1 truncate text-sm font-black text-white">{value || "--"}</p>
    </div>
  );
}
