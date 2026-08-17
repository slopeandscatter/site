# Slope &amp; Scatter

Curiosity-driven data journalism. Every piece is a question, a model you can push on, and
the full working shown underneath.

Each piece follows the same shape: **question → model → interactive visualisation → methodology.**

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build into dist/
pnpm preview
pnpm lint       # eslint
pnpm format     # eslint --fix + prettier
```

## The design system

Two things carry the identity. Both are defined in `src/styles/tailwind-theme.css` and
neither should be changed casually.

### Riso inks

Five real Risograph inks, one per desk. They double as the categorical chart palette, so
Games is `#00A95C` everywhere — in the nav, on a tag, and as a dot in a scatter.

| Desk           | Ink       | Hex       | Contrast on plot ground |
| -------------- | --------- | --------- | ----------------------- |
| Infrastructure | Sky Blue  | `#0090CE` | 3.38:1                  |
| Cost of living | Scarlet   | `#F65058` | 3.20:1                  |
| Games          | Green     | `#00A95C` | 2.91:1                  |
| Sport          | Violet    | `#9F6DB9` | 3.71:1                  |
| Culture        | Flat Gold | `#BB8B41` | 2.89:1                  |

The set was chosen so that the heaviest-to-lightest contrast spread is **1.28×** and the
closest perceptual distance between any two is **ΔE 44**. Those two properties are what
stop one desk from shouting and another from vanishing. Swapping an ink for a prettier
colour will quietly break both — re-check the numbers if you do.

Grounds: paper `#F2F4F0`, plot `#F8F9F6`, rule `#C6CEC8`, page grid `#E0E5E0`, ink `#14181A`.

### Type — three faces, three jobs

| Role    | Face             | Used for                                     |
| ------- | ---------------- | -------------------------------------------- |
| Display | Familjen Grotesk | headlines, article titles, figures           |
| Body    | Literata         | long-form reading                            |
| Utility | IBM Plex Mono    | axis labels, metadata, methodology, eyebrows |

All self-hosted via fontsource — no third-party request on page load. Preloads live in
`src/layouts/BaseHead.astro`.

## Stack

Astro 7 · MDX · content collections · Tailwind 4 · React islands · astro-seo · RSS · sitemap.

Built on the Voyager template (Cosmic Themes), stripped to the parts a publication needs.
Removed: portfolio/resume/projects, testimonials, pricing, FAQ, process, logo clouds, the
example pages, Keystatic, and the French locale.

The i18n plumbing is intentionally left in place at a single locale (`en`). The language
switcher self-hides when `locales.length === 1`, so adding a second language later is a
config change rather than a rewrite.

## Where things are

```
src/
  components/       shared UI
  config/en/        siteData, navData
  config/           siteSettings, translationData
  data/blog/en/     the pieces (MDX)
  data/authors/     author entries
  layouts/          BaseLayout, BaseHead, blog layouts
  pages/            routes
  styles/           global.css, tailwind-theme.css, fonts.css
```

## Outstanding

- **Homepage is a placeholder.** The real index is a scatter plot: each piece is a point on
  swappable axis pairs (money × certainty, work × surprise, date × scope) with a
  least-squares fit and a 95% band through it. Needs the collection schema extended with
  `desk`, `money`, `cert`, `work`, `surp`, `scope`.
- **Article template** — question / model / interactive / methodology — not yet built.
- `/method/` and `/corrections/` are linked but do not exist yet.
- `public/images/og-default.png` needs creating (1200×630 wordmark card).
- Dark mode ships from the template but has not been designed against the paper ground.
- Deploy target is still the template's Netlify adapter; revisit before launch.
