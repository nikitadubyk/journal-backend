# Work Journal — Журнал работ

A full-stack application for logging daily work records with filtering by date.

---

## Tech Stack

### Backend

| Tool                        | Why                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Express 5**               | Minimal, well-known HTTP framework — no overhead for a focused CRUD API                            |
| **Prisma ORM**              | Type-safe DB client with auto-generated types from schema; migrations and seeding built in         |
| **PostgreSQL** (via Docker) | Reliable relational DB; pairs naturally with Prisma                                                |
| **Zod**                     | Runtime request validation that mirrors TypeScript types — catches bad input before it hits the DB |
| **TypeScript**              | End-to-end type safety; Prisma generates types directly from the schema                            |
|                             |

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (running)
- [Node.js](https://nodejs.org/) v18+
- npm v9+

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env
```

Minimum required variables:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/journal"
PORT=5000
```

---

### 3. Start the database

```bash
npm run docker:compose
```

This starts a PostgreSQL container in the background. To stop it later:

```bash
npm run docker:compose:down
```

---

### 4. Set up the database

Generate the Prisma client, run migrations, and seed initial data:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run seed
```

> **Note:** `prisma:migrate` will prompt you for a migration name on first run — enter anything, e.g. `init`.

---

### 5. Start the development server

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

---

## Available Scripts

| Script                        | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `npm run dev`                 | Start backend in watch mode via nodemon           |
| `npm run build`               | Compile TypeScript to `dist/`                     |
| `npm run start`               | Run compiled production build                     |
| `npm run docker:compose`      | Start PostgreSQL container                        |
| `npm run docker:compose:down` | Stop PostgreSQL container                         |
| `npm run prisma:generate`     | Regenerate Prisma client after schema changes     |
| `npm run prisma:migrate`      | Create and apply a new migration                  |
| `npm run seed`                | Populate the database with initial work types     |
| `npm run prisma:studio`       | Open Prisma Studio GUI at `http://localhost:5555` |
