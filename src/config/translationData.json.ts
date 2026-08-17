/**
 * * Configuration of the i18n system data files and text translations
 *
 * Slope & Scatter runs a single locale ("en"). The i18n plumbing is kept intact so a
 * second language is a config change rather than a rewrite — add the locale to
 * `astro.config.mjs`, `siteSettings.json.ts`, and each object below.
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts
 * to translate various strings on your site.
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts");
 * ```
 */
export const textTranslations = {
  en: {
    hero_text: "We take a question nobody funded, and do the arithmetic anyway.",
    hero_description: `Every piece is a question, a model you can push on, and the full working shown underneath. Move the assumptions. Watch the answer move.`,
    back_to_all_posts: "Back to every question",
    updated: "Updated",
    share_this_article: "Share this piece",
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 *
 * These routes must be everything after the base domain. So if this is
 * "slopeandscatter.com/blog", the route would be "blog"
 */
export const routeTranslations = {
  en: {
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
  },
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 */
export const localizedCollections = {
  blog: {
    en: "blog",
  },
} as const;
