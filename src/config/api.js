export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "https://car-predictor-4djb.onrender.com"
).replace(/\/$/, "");

export async function getHealth(signal) {
  const response = await fetch(`${API_BASE_URL}/health`, { signal });
  if (!response.ok) {
    throw new Error("Health check failed.");
  }
  return response.json();
}

export async function getMetadata(signal) {
  const response = await fetch(`${API_BASE_URL}/metadata`, { signal });
  if (!response.ok) {
    throw new Error("Metadata request failed.");
  }
  return response.json();
}

export async function predictPrice(payload) {
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Prediction failed.");
  }

  return data.predictions?.[0];
}
