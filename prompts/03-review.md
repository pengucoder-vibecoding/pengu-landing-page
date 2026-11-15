# 03 · Review v1 with 3 checks, then fix

## Checks (run on v1)

| # | Check | How | v1 result |
|---|---|---|---|
| 1 | Hard-coded colors | search for hex codes in `components/`, `lib/`, `app/*.tsx` | **0** found (the prompt constraint worked) |
| 2 | Mobile layout | open at 375 px wide and scroll the whole page | no horizontal scroll, but **feature cards stayed in 3 columns and pricing in 2 columns** (1 to 2 words per line), header links touched the button, hero title wrapped to 5 lines |
| 3 | Accessibility | axe-core 4.14 (rules: wcag2a, wcag2aa, best-practice) + Tab through the page | **21 elements** failed color contrast (`color-contrast`, serious). Focus was visible only through the browser default outline |

axe-core and Playwright were run from a separate folder, not added to this project.

## Prompt

```text
Here are the review results for v1:
1. At 375 px the feature grid stays 3 columns and pricing stays 2 columns. Make every grid 1 column on mobile.
2. The header links collide with the button on mobile. Hide the nav links below md, keep the logo and the CTA.
3. The hero title wraps to 5 lines on mobile. Scale headings by breakpoint.
4. axe-core reports 21 color-contrast failures. Fix them by changing the tokens in @theme, not individual components.
5. Add a clear focus style for keyboard users, defined once.
6. Pricing buttons link to "#". Move their URLs into lib/content.ts.
Keep the diff minimal. Run build, lint and report.
```

## Result

25 lines added, 17 removed across 8 files:
- `--color-muted` changed from `#6b7099` to `#a9adcf`; text on purple buttons changed from white to the dark background color.
- Grids: `grid-cols-1 md:grid-cols-3` (features), `grid-cols-1 sm:grid-cols-2` (pricing).
- Headings scale with `sm:` and `lg:`; hero buttons stack on mobile.
- One `:focus-visible` rule in `globals.css`.
- Decorative icons marked `aria-hidden`; nav has `aria-label`.
- Plan URLs live in `lib/content.ts`.

## After (v2)

| Check | v1 | v2 |
|---|---|---|
| Hex codes in components | 0 | 0 |
| Grids on a 375 px screen | 3 and 2 columns | 1 column |
| axe-core violations | 1 rule, 21 elements | **0** |
| Focus style | browser default | 2 px brand outline |
| `npm run build` / `npm run lint` | pass (after fix in 02) | pass |

## Fixes

None by hand in this round. Every change came from the prompt above, and each one was checked against the diff before committing.
