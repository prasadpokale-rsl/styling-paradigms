# Studio UI

Exercise 2: a small React and TypeScript component library styled with Vanilla
Extract. Vanilla Extract generates the component CSS during the Vite build.

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

The production build includes a generated CSS asset in `dist/assets`.

## Components

Import the reusable components from `src/components`:

```tsx
import { Badge, Button, Card } from './components'

<Card>
  <Badge variant="success">Complete</Badge>
  <Button variant="primary" size="large">Continue</Button>
</Card>
```

- `Button`: primary, secondary, and danger variants; small and large sizes;
  hover, focus-visible, and disabled states.
- `Card`: a responsive content surface with shared spacing, border, radius, and
  shadow tokens.
- `Badge`: success, warning, and error variants.

Shared design tokens are defined in `src/styles/tokens.css.ts`. Component styles
are kept in adjacent `.css.ts` files and compiled through the Vanilla Extract
Vite plugin. `src/App.tsx` demonstrates the components and their variants.
