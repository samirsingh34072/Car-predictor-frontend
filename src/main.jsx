import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { useBackend } from "./hooks/useBackend";
import { Overview } from "./pages/Overview";
import { Predict } from "./pages/Predict";
import "./styles.css";

function App() {
  const { health, metadata } = useBackend();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout health={health} />}>
          <Route index element={<Overview health={health} metadata={metadata} />} />
          <Route path="predict" element={<Predict metadata={metadata} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
