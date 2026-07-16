# Car Predictor Frontend

React + Tailwind CSS frontend for the Flask car price prediction API.

## Backend

The frontend connects to the deployed API by default:

```text
https://car-predictor-4djb.onrender.com
```

To use a local or different backend, create a `.env` file from `.env.example`
and set `VITE_API_BASE_URL` to that backend's URL.

## Frontend

Install dependencies:

```bash
npm install
```

Run the React app:

```bash
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173
```
