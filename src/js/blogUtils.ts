import { type CollectionEntry, getCollection } from "astro:content";

import { locales } from "@/config/siteSettings.json";
import { filterCollectionByLanguage, removeLocaleFromSlug } from "@/js/localeUtils";
import { slugify } from "@/js/textUtils";

// --------------------------------------------------------
/**
 * * get all blog posts in a formatted array
 * @param lang: string (optional) - language to filter by (matching a locale in i18nUtils.ts)
 * @returns all blog posts, filtered for drafts, sorted by date, future posts removed, locale removed from slug, and filtered by language if passed
 *
 * ## Examples
 *
 * ### If not using i18n features
 * ```ts
 * const posts = await getAllPosts();
 * ```
 *
 * ### If using i18n features
 * ```ts
 * const posts = await getAllPosts("en");
 * ```
 * or
 * ```ts
 * const currentLocale = getLocaleFromUrl(Astro.url);
 * const posts = await getAllPosts(currentLocale);
 * ```
 */
export async function getAllPosts(
  lang?: (typeof locales)[number],
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    // filter out draft posts
    return data.draft !== true;
  });

  // if a language is passed, filter the posts by that language
  let filteredPosts: CollectionEntry<"blog">[];
  if (lang) {
    // console.log("filtering by language", lang);
    filteredPosts = filterCollectionByLanguage(posts, lang) as CollectionEntry<"blog">[];
    // filteredPosts = posts;
  } else {
    // console.log("no language passed, returning all posts");
    filteredPosts = posts;
  }

  // filter out future posts and sort by date
  const formattedPosts = formatPosts(filteredPosts, {
    filterOutFuturePosts: true,
    sortByDate: true,
    limit: undefined,
    removeLocale: true,
  });

  return formattedPosts;
}

// --------------------------------------------------------
/**
 * * returns all blog posts in a formatted array
 * @param posts: CollectionEntry<"blog">[] - array of posts, unformatted
 * note: this has an optional options object, params below
 * @param filterOutFuturePosts: boolean - if true, filters out future posts
 * @param sortByDate: boolean - if true, sorts posts by date
 * @param limit: number - if number is passed, limits the number of posts returned
 * @returns formatted blog posts according to passed parameters
 */
interface FormatPostsOptions {
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number;
  removeLocale?: boolean;
}

export function formatPosts(
  posts: CollectionEntry<"blog">[],
  {
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
    removeLocale = true,
  }: FormatPostsOptions = {},
): CollectionEntry<"blog">[] {
  const filteredPosts = posts.reduce((acc: CollectionEntry<"blog">[], post) => {
    const { pubDate } = post.data;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // now we have filteredPosts
  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // remove locale from URL
  if (removeLocale) {
    filteredPosts.forEach((post) => {
      // console.log("removing locale from slug for post", post.id);
      post.id = removeLocaleFromSlug(post.id);
    });
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

// --------------------------------------------------------
/**
 * * returns true if the posts are related to each other
 * @param postOne: CollectionEntry<"blog">
 * @param postTwo: CollectionEntry<"blog">
 * @returns true if the posts are related, false if not
 *
 * note: this currently compares by categories
 *
 * In a production site, you might want to implement a more robust algorithm, choosing related posts based on tags, categories, dates, authors, or keywords.
 * See example: https://blog.codybrunner.com/2024/adding-related-articles-with-astro-content-collections/
 */
export function arePostsRelated(
  postOne: CollectionEntry<"blog">,
  postTwo: CollectionEntry<"blog">,
): boolean {
  // if titles are the same, then they are the same post. return false
  if (postOne.id === postTwo.id) return false;

  // if either post has no categories, return false
  if (
    !postOne.data.categories ||
    !postTwo.data.categories ||
    postOne.data.categories.length === 0 ||
    postTwo.data.categories.length === 0
  )
    return false;

  const postOneCategories = postOne.data.categories
    .filter((category): category is string => typeof category === "string")
    .map((category) => slugify(category));

  const postTwoCategories = postTwo.data.categories
    .filter((category): category is string => typeof category === "string")
    .map((category) => slugify(category));

  // if any tags or categories match, return true
  const categoriesMatch = postOneCategories.some((category) =>
    postTwoCategories.includes(category),
  );

  return categoriesMatch;
}

// --------------------------------------------------------
/**
 * * returns an array of processed items, sorted by count
 * @param items: string[] - array of items to count and sort
 * @returns object with counts of each item in the array
 *
 * note: return looks like { productivity: 2, 'cool-code': 1 }
 */

export function countItems(items: string[]): object {
  // get counts of each item in the array
  const countedItems = items.reduce((acc, item) => {
    const val = acc[slugify(item)] || 0;

    return {
      ...acc,
      [slugify(item)]: val + 1,
    };
  }, {});

  return countedItems;
}

// --------------------------------------------------------
/**
 * * returns array of arrays, sorted by value (high value first)
 * @param jsObj: object - array of "key: value" pairs to sort
 * @returns array of arrays with counts, sorted by count
 *
 * note: return looks like [ [ 'productivity', 2 ], [ 'cool-code', 1 ] ]
 * note: this is used for tag and category cloud ordering
 */
export function sortByValue(jsObj: object): [string, number][] {
  const array: [string, number][] = [];
  for (const i in jsObj) {
    array.push([i, jsObj[i]]);
  }

  const sorted = array.sort((a, b) => {
    return b[1] - a[1];
  });

  // looks like [ [ 'productivity', 2 ], [ 'cool-code', 1 ] ]
  return sorted;
}

/**
 * * Reading time, derived from the raw MDX body at build time.
 *
 * Shown under a headline as "5 min read". Not used by the homepage scatter, which
 * encodes length as point size and needs the unrounded `countWords` for that.
 *
 * @param body raw markdown/MDX source, i.e. `entry.body`
 * @param wpm words per minute; 200 is the usual figure for considered prose
 * @returns whole minutes, minimum 1
 */
export function readingTime(body: string | undefined, wpm: number = 200): number {
  return Math.max(1, Math.round(countWords(body) / wpm));
}

/**
 * * Words of prose, derived from the raw MDX body at build time.
 *
 * The homepage scatter encodes this as point SIZE. Word count is used rather than
 * reading time because reading time is rounded to whole minutes, which collapses a
 * real range into three or four buckets — fine for "5 min read" under a headline,
 * useless as a continuous visual encoding.
 *
 * Counts prose only: frontmatter, code fences, JSX/HTML tags and link URLs are stripped
 * first, so a piece carrying a large interactive component is not measured as a long
 * read. This is the same normalisation `readingTime` applies, because they are the same
 * measurement at two resolutions.
 *
 * @param body raw markdown/MDX source, i.e. `entry.body`
 */
export function countWords(body: string | undefined): number {
  if (!body) return 0;
  const prose = body
    .replace(/^---[\s\S]*?---/, "") // frontmatter
    .replace(/```[\s\S]*?```/g, "") // fenced code
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/<[^>]+>/g, " ") // JSX and HTML tags
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // keep link text, drop the URL
    .replace(/[#*_>~|-]/g, " ");
  return prose.split(/\s+/).filter(Boolean).length;
}

/**
 * * Sources cited, counted from the piece's own body at build time.
 *
 * This is the homepage scatter's y-axis, plotted against publication order. Reading
 * time was there first and turned out to be a poor encoding — it barely varies, so
 * every piece landed on one flat line. Sourcing varies a great deal, needs no
 * frontmatter field, and is the thing this site claims to care about; plotted over
 * time it answers "are we sourcing harder as we go?"
 *
 * Counts DISTINCT external URLs, so citing the same StatCan table four times counts
 * once — but two different tables on the same host count twice, including when the
 * only thing separating them is the query string. Internal links and anchors are not
 * sources, and neither is anything inside a code fence.
 *
 * @param body raw markdown/MDX source, i.e. `entry.body`
 */
export function countSources(body: string | undefined): number {
  if (!body) return 0;
  const prose = body.replace(/```[\s\S]*?```/g, ""); // code blocks are not citations
  const urls = new Set<string>();
  // markdown links, autolinks, and bare hrefs in embedded JSX/HTML
  const patterns = [
    /\]\((https?:\/\/[^)\s]+)\)/g,
    /<(https?:\/\/[^>\s]+)>/g,
    /href=["'](https?:\/\/[^"']+)["']/g,
  ];
  for (const re of patterns) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(prose)) !== null) {
      // Normalise so http/https, a trailing slash, and a #fragment don't double-count.
      //
      // The QUERY STRING is deliberately kept. It used to be stripped along with the
      // fragment, which silently collapsed every citation that identifies its document
      // by parameter rather than by path — a StatCan table, a court docket, anything
      // ending ?id= — into a single source. Seventeen distinct references counted as
      // one. That is a real undercount on the number this site's front page now plots.
      try {
        const u = new URL(m[1]);
        urls.add(
          u.hostname.replace(/^www\./, "") + u.pathname.replace(/\/$/, "") + u.search,
        );
      } catch {
        // an unparseable href is not a citation
      }
    }
  }
  return urls.size;
}
