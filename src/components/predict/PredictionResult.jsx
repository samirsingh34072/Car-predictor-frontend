import React from "react";
import { AlertCircle, IndianRupee, Timer, UserRound } from "lucide-react";
import { formatCurrency } from "../../utils/formatters";

function ResultMetric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <Icon className="mb-3 h-5 w-5 text-cyan-300" />
      <p className="text-xs font-black uppercase text-slate-500">{label}</p>
      <p className="mt-1 break-words text-lg font-black text-white">{value}</p>
    </div>
  );
}

export function PredictionResult({ prediction, form, error }) {
  const year = Number(form.Year);
  const age = year ? Math.max(new Date().getFullYear() - year, 0) : "--";

  return (
    <aside className="space-y-5">
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] p-5 shadow-[0_0_70px_rgba(34,211,238,0.16)] backdrop-blur-xl">
        <p className="text-xs font-black uppercase text-cyan-200">Your Estimate</p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/75 p-6">
          <p className="text-sm font-bold text-slate-400">Predicted new price</p>
          <p className="mt-3 text-5xl font-black tracking-tight text-white">
            {prediction ? `${prediction.predicted_new_price_lakh} Lakh` : "--"}
          </p>
          <p className="mt-3 text-sm font-bold text-cyan-200">
            {prediction ? formatCurrency(prediction.predicted_new_price_rupees) : "Your result will appear here."}
          </p>
        </div>
      </div>

      {error ? (
        <div className="flex items-start gap-3 rounded-2xl border border-rose-300/20 bg-rose-500/10 p-4 text-sm font-bold text-rose-100">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
        <ResultMetric icon={Timer} label="Car age" value={age === "--" ? "--" : `${age} yrs`} />
        <ResultMetric icon={UserRound} label="Owner" value={form.Owner_Type || "--"} />
        <ResultMetric icon={IndianRupee} label="Asking price" value={form.Price ? `${form.Price} Lakh` : "--"} />
      </div>
    </aside>
  );
}
