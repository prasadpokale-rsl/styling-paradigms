# Northstar Product Dashboard

Exercise 1: a responsive product dashboard built with React, TypeScript, Vite,
and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Verify

```sh
npm run build
npm run lint
```

## Features

- Product cards with image, category, price, inventory status, and an action.
- Responsive navigation and a one-, two-, or three-column product grid.
- Search and category filters, plus a working Add Product dialog.
- Visible hover and focus styles, with a disabled action for out-of-stock items.
- Components are separated into `src/components`; product data and shared types
  live in `src/data` and `src/types.ts`.
- Shared Tailwind theme tokens keep the layout and colors consistent.

Tailwind CSS is integrated through the Vite plugin. Theme tokens are in
`src/index.css`. Product photography is loaded from Unsplash.
