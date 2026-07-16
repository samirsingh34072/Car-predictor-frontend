import { useEffect, useState } from "react";
import { getHealth, getMetadata } from "../config/api";

export function useBackend() {
  const [health, setHealth] = useState({ state: "checking", message: "Checking backend", data: null });
  const [metadata, setMetadata] = useState(null);

  async function refresh(signal) {
    setHealth((current) => ({ ...current, state: "checking", message: "Checking backend" }));
    const [healthData, metadataData] = await Promise.all([
      getHealth(signal),
      getMetadata(signal)
    ]);

    setHealth({
      state: "connected",
      message: `Model online${healthData.r2_score ? ` | R2 ${Number(healthData.r2_score).toFixed(3)}` : ""}`,
      data: healthData
    });
    setMetadata(metadataData);
    return { healthData, metadataData };
  }

  useEffect(() => {
    const controller = new AbortController();

    refresh(controller.signal).catch((error) => {
      if (error.name !== "AbortError") {
        setHealth({ state: "offline", message: "Backend offline", data: null });
      }
    });

    return () => controller.abort();
  }, []);

  return { health, metadata, refresh };
}
