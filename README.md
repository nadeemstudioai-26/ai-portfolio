# AI Engineer Portfolio

A professional, full-stack portfolio website for an AI Engineer.

## Stack

- **Frontend:** React + Vite + Tailwind CSS (Tailwind added in a later stage)
- **Backend:** Node.js + Express
- **Database:** PostgreSQL (added in a later stage)

## Project Structure

```
ai-portfolio/
├── client/     # React + Vite frontend
├── server/     # Node + Express backend
└── README.md
```

## Status

**Stage 0 — Scaffold.** Basic frontend and backend skeletons only.
No portfolio sections, no database, no AI assistant yet.

## Local Development

See setup instructions in the project chat / stage notes. In short:

```bash
# Backend
cd server
npm install
npm run dev

# Frontend (separate terminal)
cd client
npm install
npm run dev
```

Backend runs on `http://localhost:5000`
Frontend runs on `http://localhost:5173`

## Health Check

`GET http://localhost:5000/api/health` returns a JSON status confirming the API is running.
