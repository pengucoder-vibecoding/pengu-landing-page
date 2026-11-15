# 01 · Plan (no code)

## Prompt

```text
ROLE: You are a front-end developer using Next.js (App Router) + Tailwind CSS.
CONTEXT: Landing page for a task-management app for small teams (placeholder name). The audience is freelancers.
CONTENT: Hero, Features (3 cards), Pricing (2 plans), FAQ (4 questions), Footer.
CONSTRAINTS: Mobile first. Colors and fonts defined in one place only. One component per section. Every image has alt text. Do not add any dependency without asking me first.
OUTPUT: 1) the folder tree, 2) the component list, 3) everything you are assuming. Do NOT write code yet. Wait for my review.
```

## Result

The AI returned a plan, no code:

```text
app/
  layout.tsx        root layout, <html lang>, metadata
  page.tsx          composes the sections in order
  globals.css       Tailwind import + @theme tokens (colors, fonts)
components/
  Header.tsx        logo + anchor links + CTA button
  Hero.tsx
  Features.tsx      3 cards
  Pricing.tsx       2 plans
  Faq.tsx           4 questions
  Footer.tsx
lib/
  content.ts        all copy and prices in one typed object
```

Assumptions it listed:
1. Product name "Pengu Tasks" (placeholder).
2. English copy.
3. Prices: Free and Pro at $8 per user per month (placeholder).
4. No images in v1; icons drawn with inline SVG.
5. FAQ uses native `<details>`, so no client JavaScript.
6. Dark theme only.
7. CTA buttons link to `#pricing`; no real signup.
8. Fonts: system font stack, so the build does not depend on a font download.

## Fixes

Approved with 2 changes before any code was written:
- Assumption 3: the prices are fake, so the UI must say "example pricing" next to them. A template should never look like a real offer.
- Assumption 6: kept dark only for v1, but every color must come from the `@theme` tokens so a light theme is a one-file change later.
