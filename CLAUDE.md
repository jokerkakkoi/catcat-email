# CatCat Email

A Tauri + React desktop email application.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 7, Tailwind CSS 4
- **Desktop**: Tauri 2 (Rust backend)
- **UI Components**: shadcn, Radix UI, Lucide icons, clsx, tailwind-merge
- **State**: Zustand
- **Package Manager**: pnpm

## Project Structure

```
src/                    # React frontend
  components/           # UI components
    pane/              # Pane components (email list, content)
    sidebar/           # Sidebar navigation
    content/           # Email content display
    resizable/         # Resizable panel components
    navigation/        # Navigation components (search)
    hero.tsx, platforms.tsx, cta.tsx, footer.tsx, features.tsx
  hooks/               # Custom React hooks
  lib/                 # Utilities (utils.tsx with cn())
  App.tsx              # Main app component
  main.tsx             # Entry point
src-tauri/             # Rust backend
  src/lib.rs           # Rust library
  Cargo.toml           # Rust dependencies
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Build for production |
| `pnpm tauri dev` | Start Tauri development |
| `pnpm tauri build` | Build Tauri app |

## Architecture

- Uses `@/` alias pointing to project root
- Uses `@/components` alias for component imports
- Tailwind CSS via Vite plugin (no separate Tailwind CLI)
- Resizable pane layout using custom `use-resizable` hook

## Notes

- Component paths use Windows-style backslashes in Glob output but standard forward slashes in imports
- The `feature/merge-pane-sidebar` branch contains work-in-progress pane/sidebar merge changes
