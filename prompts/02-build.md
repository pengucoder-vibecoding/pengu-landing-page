# 02 · Build v1 from the approved plan

## Prompt

```text
The plan is approved with two changes:
- Show "Example pricing. Replace with your own." under the pricing title.
- Every color must come from the @theme tokens in globals.css.

Now write the code for the approved plan.
Keep all copy and prices in lib/content.ts. Use the system font stack.
Do not add dependencies. When you finish, run `npm run build` and `npm run lint` and report the output.
```

## Result

The AI wrote 6 section components, `lib/content.ts` and the `@theme` tokens in `app/globals.css`.

`npm run lint` passed. `npm run build` **failed**:

```text
Error occurred prerendering page "/".
    at components/Footer.tsx:7:15
>  7 |  <p>© {new Date().getFullYear()} {site.name}. Template by Pengu Coder.</p>
```

The starter enables Cache Components by default. In that mode, Next.js reports `new Date()` during prerendering as an error (see `node_modules/next/dist/docs/01-app/02-guides/building.md`, which lists `new Date()`, `Math.random()` and `crypto.randomUUID()`). The model wrote the pattern it has seen most often, not the one the installed version accepts.

## Fixes

- Removed the dynamic year from the footer: `© {site.name}`. A template does not need a live year, and it keeps the page fully static.
- After the fix: `npm run build` and `npm run lint` both pass. This version is tagged as **v1** in the history.
