import { deskIds } from "@config/desks";
import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // reference the authors collection https://docs.astro.build/en/guides/content-collections/#defining-collection-references
      authors: z.array(reference("authors")),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      // Optional: a piece can lead with its chart or its headline figure instead.
      // Add one later without touching the schema.
      heroImage: image().optional(),

      // Which desk this belongs to. Drives the colour it carries everywhere.
      // Defined once in src/config/desks.ts.
      desk: z.enum(deskIds),

      // Free-form tags, orthogonal to desk. A piece has exactly one desk and any
      // number of tags.
      categories: z.array(z.string().optional()).optional(),

      /**
       * Optional analysis metadata.
       *
       * None of this is required and nothing breaks when it is absent — the homepage
       * scatter falls back to publication date against reading time, both of which are
       * free. But each field below unlocks an extra axis pair on the homepage once
       * enough pieces carry it, so tagging a few is worthwhile if you ever feel like it.
       */
      // order-of-magnitude dollars at stake, as log10. 9 = $1B.
      money: z.number().min(0).max(15).optional(),
      // how sure you are of the headline number, 0-100
      cert: z.number().min(0).max(100).optional(),
      // hours of research
      work: z.number().min(0).optional(),
      // how far the answer landed from your going-in guess, 0-100
      surp: z.number().min(0).max(100).optional(),
      // who it touches: 1 one person, 2 a household, 3 a city, 4 an industry, 5 a country
      scope: z.number().int().min(1).max(5).optional(),

      // mappingKey allows you to match entries across languages for SEO purposes
      mappingKey: z.string().optional(),
      // blog posts will be excluded from build if draft is "true"
      draft: z.boolean().optional(),
    }),
});

// authors
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      about: z.string(),
      email: z.string(),
      authorLink: z.string(), // author page link. Could be a personal website, github, twitter, whatever you want
    }),
});

// other pages
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/otherPages" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      mappingKey: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  otherPages: pagesCollection,
};
