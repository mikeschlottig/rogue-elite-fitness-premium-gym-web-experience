# Rogue Elite Fitness

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

A modern, full-stack fitness application built with React, TypeScript, and Cloudflare Workers. Track workouts, monitor progress, and stay motivated with a sleek, responsive UI powered by the edge.

## Features

- **Responsive Design**: Mobile-first UI with Tailwind CSS and shadcn/ui components
- **Real-time API**: Fast, serverless backend using Hono on Cloudflare Workers
- **State Management**: TanStack Query for data fetching and caching
- **Dark Mode**: Seamless theme switching with localStorage persistence
- **Error Handling**: Robust client and server-side error reporting
- **Performance Optimized**: Edge deployment for global low-latency access
- **Type-Safe**: End-to-end TypeScript with Workers type generation

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons
- **Backend**: Hono, Cloudflare Workers
- **Data**: TanStack Query, React Router, Zod (validation)
- **UI/UX**: Framer Motion (animations), Sonner (toasts), Radix UI primitives
- **Tools**: Bun (package manager), Wrangler (deployment), ESLint, Prettier

## Quick Start

1. **Clone the repo** (or deploy directly via the button above)
2. **Install dependencies**:
   ```bash
   bun install
   ```
3. **Start development server**:
   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured port).

## Installation

This project uses **Bun** for faster installs and development.

```bash
# Install dependencies
bun install

# Generate Cloudflare Worker types (if needed)
bun run cf-typegen
```

## Development

- **Local Development**:
  ```bash
  bun dev
  ```
  Runs Vite dev server with hot reload. Backend routes available at `/api/*`.

- **Type Checking**:
  ```bash
  bun run lint
  ```

- **Preview Production Build**:
  ```bash
  bun run preview
  ```

- **Custom Environment**:
  Set `PORT` env var for custom port:
  ```bash
  PORT=8080 bun dev
  ```

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun preview` | Preview production build |
| `bun deploy` | Build & deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Project Structure

```
├── src/              # React app source
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities & error reporting
│   ├── pages/        # Page components
│   └── main.tsx      # Entry point
├── worker/           # Cloudflare Worker backend
│   ├── index.ts      # Main handler (DO NOT EDIT)
│   ├── userRoutes.ts # Add your API routes here
│   └── core-utils.ts # Environment types
├── public/           # Static assets
└── vite.config.ts    # Vite + Cloudflare config
```

## Adding API Routes

Edit `worker/userRoutes.ts`:

```typescript
import { Hono } from "hono";

export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.get("/api/workouts", (c) => c.json({ workouts: [] }));
  // Add your routes here
}
```

Routes auto-reload in dev mode.

## Deployment

1. **Configure Wrangler** (optional: edit `wrangler.toml` for secrets/bindings):
   ```bash
   wrangler secret put YOUR_SECRET
   ```

2. **Deploy to Cloudflare**:
   ```bash
   bun deploy
   ```
   Deploys Worker + static assets to your Cloudflare account.

[![[cloudflarebutton]]](https://deploy.workers.cloudflare.com)

**Custom Domain**: After deployment, bind via Cloudflare Dashboard > Workers > Triggers.

## Environment Variables

Defined in `worker/core-utils.ts` as `Env`. Add bindings/secrets via Wrangler:
```
wrangler binding add ASSETS --type ASSETS
```

## Contributing

1. Fork & clone
2. `bun install`
3. Create feature branch: `git checkout -b feature/awesome`
4. Commit changes: `git commit -m "feat: add awesome feature"`
5. Push & PR

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- Report issues: GitHub Issues

Built with ❤️ for the edge by Cloudflare.