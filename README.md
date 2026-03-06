# Winme.live

One-page React site for Winme.live, built with TypeScript, Tailwind CSS, and a shadcn-style component layout.

## Structure

- Component path: `components/ui`
- Global styles path: `src/index.css`
- Utility path: `lib/utils.ts`

## Local setup

```bash
npm install
npm run dev
```

## shadcn CLI note

This repo already includes the structure the shadcn CLI expects:

- `components.json`
- `components/ui`
- `lib/utils.ts`
- Tailwind wired through `src/index.css`

If you ever want to reinitialize with the CLI instead of using the included files:

```bash
npx shadcn@latest init
```
