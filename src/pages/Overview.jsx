import React from "react";
import { ArrowRight, CarFront, Gauge, IndianRupee, MapPin, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassPanel } from "../components/ui/GlassPanel";
import { MetricCard } from "../components/ui/MetricCard";

export function Overview({ health, metadata }) {
  return (
    <div className="space-y-6">
      <GlassPanel className="overflow-hidden">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-sm font-black uppercase text-cyan-300">Car Price Predictor</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
              Estimate your car&apos;s value in a cleaner, faster way.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Enter a car&apos;s model, location, year, mileage, engine, ownership, and current price to get an instant predicted new price. The experience is designed for quick comparisons, clear results, and confident decisions.
            </p>
            <Link
              to="/predict"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.36)] transition hover:bg-cyan-200"
            >
              Start Prediction
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[280px] rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_35%,rgba(103,232,249,0.24),transparent_32%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex justify-end">
                <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black text-cyan-100 shadow-[0_0_24px_rgba(103,232,249,0.22)]">
                  SMART ESTIMATE
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm">
                <div className="h-24 rounded-t-[3rem] border border-cyan-200/30 bg-cyan-200/10 shadow-[0_0_60px_rgba(103,232,249,0.12)]" />
                <div className="relative h-28 rounded-3xl border border-cyan-200/30 bg-gradient-to-r from-cyan-300/30 via-slate-700 to-fuchsia-400/20 shadow-[0_0_70px_rgba(34,211,238,0.22)]">
                  <div className="absolute bottom-[-18px] left-8 h-12 w-12 animate-[spin_5s_linear_infinite] rounded-full border-8 border-slate-800 bg-cyan-200" />
                  <div className="absolute bottom-[-18px] right-8 h-12 w-12 animate-[spin_5s_linear_infinite] rounded-full border-8 border-slate-800 bg-cyan-200" />
                  <Sparkles className="absolute -left-5 top-4 h-8 w-8 animate-pulse text-cyan-200" />
                  <Zap className="absolute -right-4 top-8 h-8 w-8 animate-bounce text-fuchsia-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={CarFront} label="Vehicle Details" value="Model, year, usage" />
        <MetricCard icon={MapPin} label="Market Context" value="City and fuel type" />
        <MetricCard icon={Gauge} label="Performance" value="Mileage, engine, power" />
        <MetricCard icon={IndianRupee} label="Output" value="Predicted price" />
      </div>

      <GlassPanel className="p-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <div>
            <ShieldCheck className="mb-4 h-8 w-8 animate-pulse text-cyan-300" />
            <h2 className="text-xl font-black text-white">Simple Inputs</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Fill in practical vehicle details without technical model settings getting in the way.
            </p>
          </div>
          <div>
            <Sparkles className="mb-4 h-8 w-8 animate-pulse text-fuchsia-300" />
            <h2 className="text-xl font-black text-white">Instant Result</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              See the estimated new price in lakh and rupees as soon as the prediction completes.
            </p>
          </div>
          <div>
            <Zap className="mb-4 h-8 w-8 animate-bounce text-amber-200" />
            <h2 className="text-xl font-black text-white">Modern Experience</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Dark visuals, glowing controls, and focused navigation keep the app feeling clean and premium.
            </p>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
