/**
 * * Desks — the single source of truth for the site's taxonomy.
 *
 * A desk is both an editorial category and a colour. The `ink` is a real Risograph
 * ink and is used everywhere that desk appears: a tag, a nav item, a dot in the
 * scatter on the homepage. Change it here and it changes everywhere.
 *
 * ## Adding or renaming a desk
 *
 * Renaming is free — edit `label` and nothing else cares.
 *
 * Adding a SIXTH desk is not free. The current five were chosen so that, against the
 * plot ground (#F8F9F6), the heaviest-to-lightest contrast spread is 1.28x and the
 * closest perceptual distance between any two is deltaE 44. Those two numbers are what
 * stop one desk from shouting and another from vanishing in a chart. Picking a sixth ink
 * by eye will quietly break them. If you need a sixth, re-derive the whole set against
 * those two constraints rather than appending a colour you like.
 */

export interface Desk {
  /** stable slug — used in URLs and frontmatter. Renaming this breaks existing links. */
  id: string;
  /** display name */
  label: string;
  /** the Risograph ink's real name, shown in the legend */
  ink: string;
  hex: string;
  /** contrast ratio against the plot ground, for reference */
  contrast: number;
}

export const desks = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    ink: "Sky Blue",
    hex: "#0090CE",
    contrast: 3.38,
  },
  { id: "cost-of-living", label: "Cost of living", ink: "Scarlet", hex: "#F65058", contrast: 3.2 },
  { id: "games", label: "Games", ink: "Green", hex: "#00A95C", contrast: 2.91 },
  { id: "sport", label: "Sport", ink: "Violet", hex: "#9F6DB9", contrast: 3.71 },
  { id: "culture", label: "Culture", ink: "Flat Gold", hex: "#BB8B41", contrast: 2.89 },
] as const satisfies readonly Desk[];

export type DeskId = (typeof desks)[number]["id"];

/** ids as a plain array, for building the zod enum in content.config.ts */
export const deskIds = desks.map((d) => d.id) as [DeskId, ...DeskId[]];

const byId = new Map(desks.map((d) => [d.id, d as Desk]));

/** Look up a desk. Returns undefined for an unknown id rather than throwing. */
export function getDesk(id: string): Desk | undefined {
  return byId.get(id);
}

export default desks;
