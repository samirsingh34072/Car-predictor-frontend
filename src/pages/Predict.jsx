import React, { useState } from "react";
import { predictPrice } from "../config/api";
import { EMPTY_FORM } from "../config/options";
import { PredictionForm } from "../components/predict/PredictionForm";
import { PredictionLoader } from "../components/predict/PredictionLoader";
import { ResultModal } from "../components/predict/ResultModal";
import { buildPredictionPayload } from "../utils/formatters";

const wait = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

export function Predict() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setPrediction(null);
    setError("");
  }

  async function submitPrediction(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setPrediction(null);

    try {
      const [result] = await Promise.all([
        predictPrice(buildPredictionPayload(form)),
        wait(1800)
      ]);
      if (!result) {
        throw new Error("Prediction response did not include a result.");
      }
      setPrediction(result);
    } catch (apiError) {
      setError(apiError.message || "Unable to reach backend.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <PredictionLoader show={isSubmitting} />
      <ResultModal
        prediction={prediction}
        form={form}
        onClose={() => setPrediction(null)}
        onReset={resetForm}
      />
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-black uppercase text-cyan-300">Value check</p>
          <h1 className="mt-2 text-4xl font-black text-white">Find a fair car price</h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Add the car details below and we&apos;ll estimate its new price using your trained prediction model.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        <PredictionForm
          form={form}
          onChange={updateField}
          onSubmit={submitPrediction}
          isSubmitting={isSubmitting}
        />
      </div>

      {error ? (
        <div className="mx-auto max-w-4xl rounded-2xl border border-rose-300/20 bg-rose-500/10 p-4 text-sm font-bold text-rose-100">
          {error}
        </div>
      ) : null}
    </div>
  );
}
