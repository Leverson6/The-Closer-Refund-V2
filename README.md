# The Closer Refund

Landing page built with Next.js (App Router), Tailwind CSS v4 and
shadcn/ui conventions. The page itself lives in
`components/templates/rivr/` as a self-contained set of sections (hero,
metrics, logo cloud, stepper, features, CTA, footer, navbar) composed by
`components/templates/rivr/rivr.tsx` and rendered from `app/page.tsx`.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx       root layout, loads globals.css
  page.tsx         renders <Rivr />
  globals.css      Tailwind v4 entry + design tokens
components/
  templates/rivr/  the page sections (see below)
lib/
  utils.ts         cn() helper (clsx + tailwind-merge)
```

The `rivr` folder is intentionally self-contained: its own color tokens
and font import live in `styles.tsx`, scoped under the `.rivr` class, so
it doesn't depend on the rest of the app's theme.

## Adding shadcn/ui components

This project is already wired for the shadcn CLI (`components.json`):

```bash
npx shadcn@latest add button
```

See ATTRIBUTION.md for the original template's author, licence and
commit.
