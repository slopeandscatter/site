---
name: Slope & Scatter
description: Curiosity-driven data journalism, laid out on plotting paper.
colors:
  riso-sky: "#0090CE"
  riso-scarlet: "#F65058"
  riso-green: "#00A95C"
  riso-violet: "#9F6DB9"
  riso-gold: "#BB8B41"
  paper: "#F2F4F0"
  plot: "#FCFDFA"
  rule: "#C6CEC8"
  graticule: "#ECEFEB"
  ink: "#14181A"
  ink-muted: "#5A6360"
  paper-dark: "#14181A"
  plot-dark: "#1C2220"
  rule-dark: "#414947"
  graticule-dark: "#181D1C"
  ink-dark: "#E4E8E2"
  ink-muted-dark: "#98A19C"
typography:
  display:
    fontFamily: "Familjen Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.2rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Familjen Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Familjen Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Literata Variable, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Literata Variable, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  micro:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Menlo, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  none: "0"
  mark: "9999px"
spacing:
  hairline: "1px"
  xs: "0.375rem"
  sm: "0.625rem"
  md: "1rem"
  lg: "1.5rem"
  gutter: "1.5rem"
  section: "4rem"
  section-major: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.375rem 0.75rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary-disabled:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "0.875rem 0"
    typography: "{typography.label}"
  filter-chip-pressed:
    textColor: "{colors.ink}"
  input-text:
    backgroundColor: "{colors.plot}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.625rem 0.875rem"
  card-preview:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.875rem 1rem"
    width: "min(300px, 100%)"
---

# Design System: Slope & Scatter

## Overview

**Creative North Star: "The Plotting Table"**

This is a working surface, not a publication. Graph paper runs under everything; instruments sit on top of it. The reader is standing at the table with you while you do the arithmetic, not being handed a finished result from behind a lectern. That single idea explains the graticule under the page, the monospace measurements, the visible regression line, and the decision to make the homepage index *be* a scatter plot rather than a list of links to scatter plots.

The register is warm and curious but precise and unhurried. The subject matter is "something you'd argue about at a bar"; the treatment is a laboratory bench. Those are not in tension — the whole premise is taking a pub argument seriously enough to measure it. Copy can be conversational. The furniture never is.

Colour is data. Five real Risograph inks, one per editorial desk, and a desk's ink means that desk everywhere it appears: in a tag, in the navigation, as a point in a chart. There is no decorative palette underneath this one. If a colour appears and does not encode something, that is a defect rather than a flourish.

**Key Characteristics:**

- Plotting paper ground with a faint graticule; the chart is the brightest object on the page
- Five spot inks that double as the categorical chart palette, never used decoratively
- Three faces, three jobs: grotesk display, serif body, mono for anything measured
- Zero corner radius on everything except data marks, which are circles
- Completely flat — depth is tonal, never cast
- Statistical honesty expressed in the furniture, not only in the prose

**Anti-references.** This must not read as a SaaS dashboard (rounded cards, KPI tiles, drop shadows), a mainstream news site (ad furniture, stock photography, competing calls to action), or a minimal portfolio (enormous type, acres of nothing). Charts as spectacle is deliberately *not* on the reject list — an ambitious visualisation is welcome so long as it is still an argument.

## Colors

Five Risograph spot inks over a cool grey-green paper. The inks are named after the real inks they are, not after their hues.

### Primary

- **Sky Blue** (`#0090CE`): The Infrastructure desk, and the site's only interactive accent — links, focus rings, heading hover. It carries two jobs because Infrastructure is the founding desk. Do not add a sixth colour to separate them.

### Secondary

- **Scarlet** (`#F65058`): The Cost of living desk. Nothing else.
- **Green** (`#00A95C`): The Games desk.
- **Violet** (`#9F6DB9`): The Sport desk.
- **Flat Gold** (`#BB8B41`): The Culture desk.

### Neutral

- **Paper**: The page. A cool grey-green stock, never white.
- **Plot Ground**: Inside a chart's plot area. Sits one step *above* paper — the sheet laid on the table.
- **Graticule**: The 120px page grid. Texture, not structure — and always quieter than the plot ground, which is what keeps the chart the brightest object on the page.
- **Rule**: Hairlines, gridlines, dividers.
- **Ink**: All primary text, axis lines, control borders.
- **Muted Ink**: Secondary text, tick labels, metadata.

Dark mode swaps the six ground and ink tokens and leaves the five spot inks untouched. Measured against the dark plot ground the inks hold the same 1.28× heaviest-to-lightest contrast spread they hold on paper, and every one lands above 4:1 rather than around 3:1.

### Named Rules

**The Colour Is Data Rule.** An ink appears only where it encodes a desk — a dot, a tag, a chart mark, a nav item. Colour used for emphasis, decoration, or mood is a defect. The single sanctioned exception is Sky Blue doing double duty as the interactive accent.

**The Sixth Ink Rule.** The five were derived together so the contrast spread is 1.28× and the closest perceptual distance between any two is ΔE 44. Adding a sixth by eye breaks both silently. Re-derive the whole set against those two constraints or do not add one.

**The Two Greys Rule.** There is no third tier of grey text. On paper, Muted Ink at 5.60:1 is the faintest legible value; anything lighter fails AA. Tiers separate by face, size, and tracking, never by fading toward the background.

## Typography

**Display Font:** Familjen Grotesk Variable (fallback: system sans)
**Body Font:** Literata Variable (fallback: Georgia, serif)
**Label/Mono Font:** IBM Plex Mono (fallback: SFMono-Regular, Menlo)

**Character:** A tight, slightly condensed grotesk for anything that argues; a warm reading serif for anything that explains; a monospace for anything that was measured. The three are doing genuinely different jobs, which is why three faces do not read as indecision.

### Hierarchy

- **Display** (600, clamp 2.6→4.2rem, 1.04, −0.035em): Page headline. One per page.
- **Headline** (600, clamp 1.875→2.6rem, 1.08, −0.028em): Section headings and article titles.
- **Title** (600, 1.25rem, −0.02em): Card titles, list items.
- **Body** (400, 17px, 1.65): Reading text. Measure 65–75ch.
- **Label** (500, 11px, 0.14em, uppercase, mono): Section markers, controls, counts.
- **Caption** (400, 15px, serif): Secondary prose — figure captions, reference lists, contents links. Prose that supports the body rather than being it. Serif, because it is still reading; smaller, because it is not the argument.
- **Meta** (400, 13px, mono): Metadata under a title, input values, list detail.
- **Micro** (400, 10px, 0.06em, mono): Chart furniture only — tick labels, callouts, in-plot annotation. Never used outside a figure.

**Eight steps, and nothing between them.** Display, Headline, Title, Body, Caption, Meta, Label, Micro. Anything between them is drift.

### Named Rules

**The Eight Steps Rule.** Display, Headline, Title, Body, Caption, Meta, Label, Micro. A literal size that is not one of these is drift, not a decision. Caption was added when the article template made it obvious that secondary serif prose is a real role and not a rounding error — the test for adding a step is that role, not the convenience of a value already in the code.

**The Mono Means Measured Rule.** Monospace is not a "technical" costume. It marks a value that was counted, derived, or measured — axis ticks, source counts, dates, reading times, control labels. Prose never sets in mono.

**The Self-Hosted Rule.** All three faces ship via fontsource with preloads in `BaseHead.astro`. No third-party font request on page load, ever.

## Layout

A single centred column, `max-w-6xl` with a `1.5rem` gutter. Everything — headline, lede, chart, section headings, footer — hangs off the same left rail. The chart's left margin is *derived from its own tick labels* at draw time rather than declared, so the plot area starts as close to that rail as its labels allow.

Vertical rhythm runs on two intervals: `4rem` between sections and `5rem` before a major break, each opening with a full-width hairline rule. Related items group by proximity; containers are not used to compensate for weak grouping.

The scatter component is container-queried, not viewport-queried: it picks a portrait or landscape frame from its own width, so the same component behaves correctly in a narrower column. Below `768px` the plot re-lays out into a portrait frame and a linear list appears beneath it; above, the plot alone carries the index. The list is server-rendered at every width and the plot stays hidden until the script marks the component ready, so a reader without JavaScript always gets the list.

### Named Rules

**The One Rail Rule.** Every element on a page starts at the same left edge. Hanging labels, indented headings, and centred section intros all break the plotting-table read.

## Elevation & Depth

**There are no shadows.** Depth is tonal and strictly ordered: graticule under paper, paper under the plot ground, the plot ground under a floating card. Each step is a small tonal lift plus, where a boundary needs to be explicit, a 1px Rule hairline.

This is a working surface. Nothing on a plotting table casts a shadow, and a zero-blur offset shadow in particular is a neobrutalist costume this world never chose.

### Named Rules

**The Flat Table Rule.** No `box-shadow`, anywhere, for any reason. If two surfaces need separating, change the tone or draw a hairline.

**The Figure Outranks The Ground Rule.** The plot ground must separate itself from the paper more strongly than the graticule does. Whenever the background out-contrasts the figure, the page reads as decorated rather than measured. Currently satisfied with margin: light figure 1.084 against ground 1.048; dark figure 1.105 against ground 1.048.

## Shapes

Zero radius. Buttons, inputs, cards, panels, tags, and the plot frame are all square. Borders are 1px — Ink when they enclose a control, Rule when they merely divide.

The single exception is a **data mark**, which is a circle: a desk dot, a scatter point, a legend swatch. A circle in this system always means "this is one of something." That is precisely why nothing else may be round — roundness is load-bearing.

### Named Rules

**The Square Corner Rule.** Radius is zero unless the element is a data mark, in which case it is a full circle. There is no middle value. Any `rounded-md`, `rounded-lg`, or `rounded-full` on a non-mark is template drift.

## Components

### Buttons

- **Shape:** Square (0 radius), 1px Ink border.
- **Primary:** Transparent on paper, ink text, mono label at 11px / 0.1em uppercase, `0.375rem 0.75rem`.
- **Hover:** Fills solid — background flips to Ink, text to Paper. A state change, not a fade.
- **Focus:** `outline` in Sky Blue, 2px, offset 2px. Never a `ring`.
- **Disabled:** Border and text drop to Rule and Muted Ink, cursor `not-allowed`, and the reason is stated in adjacent text rather than left to the cursor.

### Chips / Filters

- **Style:** Borderless, mono uppercase label, a desk-ink circle at `0.625rem`, and a tabular count.
- **State:** `aria-pressed` drives it. Selected goes to full ink; unselected desks drop to 30% opacity, so the selection reads without anything moving.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Paper, 1px Ink border.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Internal Padding:** `0.875rem 1rem`.

### Inputs / Fields

- **Style:** Square, 1px border, Plot Ground fill, mono at 13px.
- **Focus:** Sky Blue outline, 2px, offset 2px.
- **Disabled:** Rule border on Paper, muted text, paired with a visible explanation wired through `aria-describedby`.

### Navigation

Mono uppercase at 12px / 0.1em, muted at rest, ink on hover, no underline. The wordmark is a five-point scatter with a fitted line — the site's own chart at 54×20.

### The Scatter Index (signature)

The homepage index *is* a chart, and it is the system's defining component.

- **Fixed axis pair, no picker.** Publication order on x, so the newest piece is always the rightmost point and the index never rearranges itself under the reader. Sources cited on y. Both derived at build time from the piece's own body, so publishing costs no extra bookkeeping.
- **Size encodes prose length**, scaled by *area*, never by radius.
- **The line is always drawn; the band is conditional.** A least-squares line only describes the points on screen, so it is always legitimate. The 95% band asserts a relationship beyond the sample, so it appears only when the slope clears significance at the correct `t` for the degrees of freedom. Below that the line is dashed and lighter, and the caption says which one you are looking at.
- **Interaction follows pointer type.** Hover previews on a mouse; on touch a tap opens the card, and the card itself carries the link.

## Do's and Don'ts

### Do:

- **Do** derive new chart metrics from the piece's own body at build time, next to `readingTime` and `countSources`. Anything an author has to remember to fill in will eventually be wrong.
- **Do** state uncertainty in the furniture. If a mark would assert something the data does not support, suppress the mark and say so in the caption.
- **Do** keep every element on the one left rail.
- **Do** use `outline` with `outline-offset` for focus, in Sky Blue.
- **Do** let tonal steps and hairlines carry all separation.
- **Do** keep visible text and accessible name in agreement. A control reading "Infrastructure" must not announce "Sky Blue".

### Don't:

- **Don't** use an eyebrow — a mono uppercase label stacked above a heading. The heading carries its own weight. Deprecated as of this document; the three on the current homepage are drift to be removed.
- **Don't** put a colour anywhere it does not encode a desk.
- **Don't** apply a corner radius to anything that is not a data mark.
- **Don't** add a `box-shadow`. Not a soft one, not a hard one.
- **Don't** colour a phrase inside a headline for emphasis. Weight and size do that work.
- **Don't** build a page out of equal-weight cards or numbered step columns.
- **Don't** introduce a third grey for text.
- **Don't** let the graticule out-contrast the plot ground.
