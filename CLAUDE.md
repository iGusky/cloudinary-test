# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `bun` as the package manager (a `bun.lock` file is present).

```bash
bun dev        # Start development server at http://localhost:3000
bun build      # Production build
bun start      # Start production server
bun run lint   # Run ESLint
```

## Architecture

This is a Next.js 16 app using the App Router (`app/` directory), React 19, TypeScript, and Tailwind CSS v4.

The purpose of the app is to upload images to Cloudinary. The core logic lives in `app/lib/uploadImage.ts`, which is currently a stub. The home page (`app/page.tsx`) is a client component with a file input form that calls `uploadImage()` on submit.

The app uses `dotenv` for environment variables — Cloudinary credentials will need to be defined in a `.env.local` file (excluded from git).

Tailwind CSS v4 is used via `@import "tailwindcss"` in `app/styles/globals.css` (imported in `layout.tsx`). There are no `tailwind.config.*` files — configuration is done via CSS `@theme` blocks.

No test framework is configured.
