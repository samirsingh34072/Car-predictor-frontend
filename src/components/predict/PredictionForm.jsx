import React from "react";
import { Car, Gauge, IndianRupee, MapPin, Send, Settings2, UserRound, Zap } from "lucide-react";
import { FIELD_OPTIONS } from "../../config/options";
import { Field, SelectInput, TextInput } from "../ui/FormControls";

export function PredictionForm({ form, onChange, onSubmit, isSubmitting }) {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <div>
          <p className="text-xs font-black uppercase text-cyan-300">Tell us about the car</p>
          <h2 className="mt-2 text-2xl font-black text-white">Get Your Estimate</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Add the basics from the car listing and get a clean estimate without extra technical fields.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Which car is it?" icon={Car}>
          <TextInput value={form.Name} onChange={(event) => onChange("Name", event.target.value)} placeholder="Maruti Wagon R LXI CNG" required />
        </Field>

        <Field label="Where is it listed?" icon={MapPin}>
          <SelectInput value={form.Location} onChange={(event) => onChange("Location", event.target.value)} required>
            <option value="" disabled>Select city</option>
            {FIELD_OPTIONS.Location.map((item) => <option key={item}>{item}</option>)}
          </SelectInput>
        </Field>

        <Field label="Registration year" icon={Gauge}>
          <TextInput type="number" min="1995" max="2026" value={form.Year} onChange={(event) => onChange("Year", event.target.value)} placeholder="2018" required />
        </Field>

        <Field label="How much has it run?" icon={Gauge}>
          <TextInput type="number" min="0" step="100" value={form.Kilometers_Driven} onChange={(event) => onChange("Kilometers_Driven", event.target.value)} placeholder="45000" required />
        </Field>

        <Field label="Fuel" icon={Zap}>
          <SelectInput value={form.Fuel_Type} onChange={(event) => onChange("Fuel_Type", event.target.value)} required>
            <option value="" disabled>Select fuel</option>
            {FIELD_OPTIONS.Fuel_Type.map((item) => <option key={item}>{item}</option>)}
          </SelectInput>
        </Field>

        <Field label="Gearbox" icon={Settings2}>
          <SelectInput value={form.Transmission} onChange={(event) => onChange("Transmission", event.target.value)} required>
            <option value="" disabled>Select gearbox</option>
            {FIELD_OPTIONS.Transmission.map((item) => <option key={item}>{item}</option>)}
          </SelectInput>
        </Field>

        <Field label="Ownership" icon={UserRound}>
          <SelectInput value={form.Owner_Type} onChange={(event) => onChange("Owner_Type", event.target.value)} required>
            <option value="" disabled>Select ownership</option>
            {FIELD_OPTIONS.Owner_Type.map((item) => <option key={item}>{item}</option>)}
          </SelectInput>
        </Field>

        <Field label="Current asking price" icon={IndianRupee}>
          <TextInput type="number" min="0" step="0.01" value={form.Price} onChange={(event) => onChange("Price", event.target.value)} placeholder="8.75" required />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.36)] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        {isSubmitting ? "Predicting..." : "Predict Price"}
      </button>
    </form>
  );
}
