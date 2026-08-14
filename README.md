# GamersIntel

![Vercel](https://vercelbadge.vercel.app/api/your-username/GamersIntel-Client)
![License](https://img.shields.io/badge/license-ISC-blue.svg)
![pnpm](https://img.shields.io/badge/package_manager-pnpm%2010.19.0-orange.svg)

**Your Personal Gaming Inventory**

GamersIntel is a full-stack web application for managing and tracking your gaming library. Built with a modern React frontend and a robust Express backend, it provides user authentication, game catalog browsing, and personal profile management.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- **User Authentication** — Secure sign-up and login with Firebase
- **Game Catalog** — Browse and search through a curated game library
- **Personal Dashboard** — Track your gaming collection and preferences
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Dark Theme** — Custom GamersIntel dark mode with DaisyUI
- **Real-time Updates** — TanStack Query for instant data synchronization
- **Toast Notifications** — User-friendly feedback for all actions

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | Component-based UI |
| Vite | 7.2.4 | Build tool and dev server |
| React Router | 7.12.0 | Client-side routing |
| TanStack Query | 5.90.20 | Server state management |
| Firebase | 12.8.0 | Authentication |
| Tailwind CSS | 4.1.18 | Utility-first CSS |
| DaisyUI | 5.5.14 | Component library |
| Axios | 1.13.3 | HTTP client |
| SweetAlert2 | 11.26.17 | Alert dialogs |
| React Hot Toast | 2.6.0 | Toast notifications |
| Lottie React | 2.4.1 | Animations |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Express | 5.2.1 | REST API framework |
| MongoDB | 7.0.0 | Database (MongoDB Atlas) |
| Node.js | LTS | Runtime |
| Nodemon | 3.1.11 | Development server |

### Infrastructure

| Service | Purpose |
|---------|---------|
| Vercel | Frontend and backend hosting |
| MongoDB Atlas | Managed database |
| Firebase | Authentication provider |

---

## Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 10.19.0
- **MongoDB Atlas** account (cluster running)
- **Firebase** project with Authentication enabled
- **Git** for version control

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/GamersIntel.git
cd GamersIntel
```

### 2. Install dependencies

```bash
# Server dependencies
cd GamersIntel-Server
pnpm install

# Client dependencies
cd ../GamersIntel-Client
pnpm install
```

### 3. Configure environment variables

Create `.env` files in both packages. All keys are required.

#### Server (`GamersIntel-Server/.env`)

```env
PORT=3000
DB_USER=your_mongodb_atlas_username
DB_PASS=your_mongodb_atlas_password
```

#### Client (`GamersIntel-Client/.env`)

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Start development servers

```bash
# Terminal 1 — Backend
cd GamersIntel-Server
pnpm dev

# Terminal 2 — Frontend
cd GamersIntel-Client
pnpm dev
```

Open your browser:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

---

## Project Structure

```
GamersIntel/
├── GamersIntel-Server/                    # Express.js backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── env.js                     # Environment variables
│   │   │   └── database.js                # MongoDB connection
│   │   ├── controllers/
│   │   │   └── user.controller.js         # Request handlers
│   │   ├── routes/
│   │   │   └── user.routes.js             # API route definitions
│   │   ├── app.js                         # Express app setup
│   │   └── server.js                      # Server entry point
│   ├── index.js                           # Module entry wrapper
│   ├── package.json
│   └── vercel.json                        # Vercel deployment config
│
├── GamersIntel-Client/                    # React frontend
│   ├── src/
│   │   ├── Authentication/
│   │   │   ├── PrivateRoute.jsx            # Route guard for authenticated users
│   │   │   └── PublicRoute.jsx            # Route guard for guests
│   │   ├── components/
│   │   │   ├── home/                      # Landing page sections
│   │   │   ├── user/                      # Dashboard, profile, games
│   │   │   ├── Registration/              # Login, signup, forgot password
│   │   │   ├── Static/                    # About, privacy, terms, FAQ
│   │   │   └── Shared/                    # Navbar, footer, not available
│   │   ├── Context/
│   │   │   ├── AuthContext.jsx            # Auth state context
│   │   │   └── AuthProvider.jsx           # Auth provider component
│   │   ├── Firebase/
│   │   │   └── firebase.init.js           # Firebase configuration
│   │   ├── Hooks/
│   │   │   ├── useAxios.jsx              # Axios instance with baseURL
│   │   │   ├── useRAWG.jsx               # RAWG API hook
│   │   │   └── useDocumentTitle.jsx      # SEO title hook
│   │   ├── layouts/
│   │   │   └── HomeLayout.jsx            # Shared layout wrapper
│   │   ├── routes/
│   │   │   └── router.jsx                # React Router v7 routes
│   │   ├── assets/                        # Images, fonts, etc.
│   │   ├── index.css                      # Global styles, Tailwind, DaisyUI theme
│   │   └── main.jsx                       # React entry point
│   ├── public/                            # Static assets
│   ├── index.html                         # HTML shell
│   ├── vite.config.js                     # Vite configuration
│   ├── eslint.config.js                   # ESLint flat config
│   ├── package.json
│   └── vercel.json                        # SPA fallback rewrite
│
├── old.js                                  # Legacy single-file server (not in use)
└── README.md                               # This file
```

---

## Architecture

### Backend

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Routes    │────▶│ Controllers │────▶│  MongoDB    │
│ user.routes │     │user.controller│   │  Atlas      │
└─────────────┘     └─────────────┘     └─────────────┘
       ▲                   │
       │                   ▼
   Express App        Business Logic
       │                   │
       ▼                   ▼
   server.js ─────▶ env.js / database.js
```

- **Modular structure**: Routes define endpoints, controllers handle logic, config manages connections
- **MongoDB Atlas**: Single database `GamersIntelDB` with `users` collection
- **Test mode**: Setting `NODE_ENV=test` prevents auto-start; the app is exported for testing

### Frontend

```
┌─────────────────┐
│   main.jsx      │
│  Entry Point    │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  React Router v7                    │
│  createBrowserRouter                │
│  PublicRoute / PrivateRoute guards  │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Components                         │
│  ├─ Authentication (Firebase)       │
│  ├─ Home / Static / User / Shared   │
│  └─ Layouts (HomeLayout)            │
└────────┬────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  Data Layer                         │
│  ├─ Axios (useAxios)                │
│  ├─ TanStack Query (QueryClient)     │
│  └─ Firebase Auth (AuthProvider)    │
└─────────────────────────────────────┘
```

---

## API Documentation

### Base URL

- Development: `http://localhost:3000`
- Production: `https://gamers-intel-server.vercel.app/`

### Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/users` | Fetch all users | — | `Array<User>` |
| `POST` | `/users` | Create a new user | `{ name?, email, photoURL?, gamerTag?, bio?, favoriteGenres?, platforms?, country?, joinDate?, lastLogin? }` | `{ message: string }` |

### User Schema

```typescript
{
  name: string | null,
  email: string,
  photoURL: string | null,
  gamerTag: string | null,
  bio: string | null,
  favoriteGenres: string | null,
  platforms: string | null,
  country: string | null,
  joinDate: string | null,
  lastLogin: string | null
}
```

---

## Available Scripts

### Server (`GamersIntel-Server/`)

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with nodemon and hot reload |
| `pnpm start` | Start production server |

### Client (`GamersIntel-Client/`)

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Create optimized production build |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint flat config on all files |

---

## Deployment

Both packages are deployed on Vercel.

### Server

- Vercel Node.js runtime
- Routes all requests to `index.js`
- Requires environment variables set in Vercel dashboard

### Client

- Vercel static hosting
- SPA fallback rewrite to `/index.html`
- All Firebase env vars must be set in Vercel

---

## Development Guidelines

### Code Style

- **ESLint**: Flat config with React Hooks and React Refresh plugins
- **Ignored files**: `dist/` directory is excluded from linting
- **No formatter configured**: Use Prettier if desired
- **Imports**: Use ES modules (`import`/`export`)

### Environment Variables

- Server: `.env` files are gitignored. Use `.env.example` for documentation.
- Client: Vite requires `VITE_` prefix for exposed env vars.

### Known Limitations

- No tests or CI/CD configured
- No TypeScript
- No code formatting tool (Prettier not configured)
- Legacy `old.js` file is not used

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Cannot find module` errors | Run `pnpm install` in the affected package |
| MongoDB connection failed | Verify `DB_USER` and `DB_PASS` in `.env`. Check Atlas IP whitelist. |
| Firebase auth not working | Ensure all `VITE_FIREBASE_*` variables are set and Firebase Auth is enabled |
| Port already in use | Change `PORT` in server `.env` or stop the conflicting process |
| Vite HMR not working | Restart dev server; check firewall settings |
| Axios hitting production URL | Update `baseURL` in `src/Hooks/useAxios.jsx` for local development |

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`pnpm lint`)
5. Commit with a clear message (`git commit -m 'feat: add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Convention

We recommend using [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Formatting changes
- `refactor:` — Code refactoring
- `test:` — Adding tests
- `chore:` — Maintenance tasks

---

## Support

If you have questions or need help, please open an issue on GitHub.

---

## License

This project is licensed under the ISC License — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- Database powered by [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- Authentication by [Firebase](https://firebase.google.com/)
- Deployed on [Vercel](https://vercel.com/)
