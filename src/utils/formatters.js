export function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function firstNumber(value) {
  const match = String(value || "").match(/[\d.]+/);
  return match ? match[0] : "";
}

export function mileageUnit(value) {
  return String(value || "").includes("km/kg") ? "km/kg" : "kmpl";
}

export function formFromBackendExample(example) {
  if (!example) {
    return null;
  }

  return {
    Name: example.Name || "",
    Location: example.Location || "Mumbai",
    Year: example.Year || "",
    Kilometers_Driven: example.Kilometers_Driven || "",
    Fuel_Type: example.Fuel_Type || "Petrol",
    Transmission: example.Transmission || "Manual",
    Owner_Type: example.Owner_Type || "First",
    Mileage: firstNumber(example.Mileage),
    Mileage_Unit: mileageUnit(example.Mileage),
    Engine: firstNumber(example.Engine),
    Power: firstNumber(example.Power),
    Seats: example.Seats || "",
    Price: example.Price || ""
  };
}

export function buildPredictionPayload(form) {
  return {
    Name: form.Name.trim(),
    Location: form.Location,
    Year: Number(form.Year),
    Kilometers_Driven: Number(form.Kilometers_Driven),
    Fuel_Type: form.Fuel_Type,
    Transmission: form.Transmission,
    Owner_Type: form.Owner_Type,
    Mileage: `${Number(form.Mileage)} ${form.Mileage_Unit}`,
    Engine: `${Number(form.Engine)} CC`,
    Power: `${Number(form.Power)} bhp`,
    Seats: Number(form.Seats),
    Price: Number(form.Price)
  };
}
