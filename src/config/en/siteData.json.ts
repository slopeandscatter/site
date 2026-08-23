import { type SiteDataProps } from "../types/configDataTypes";

const siteData: SiteDataProps = {
  name: "Slope & Scatter",
  // Your website's title and description (meta fields)
  title: "Slope & Scatter — curiosity, measured",
  description:
    "Someone should measure that. Infrastructure, rent, games, sport, film — every piece ships the model behind the answer, and every assumption it rests on.",

  // Your information for blog post purposes
  author: {
    name: "Mark Ly",
    email: "ly.mark@gmail.com",
    // Seo.astro emits this as "@" + twitter for the Twitter card's site and creator.
    // Empty meant every page shipped a bare "@" as its handle.
    twitter: "slopeandscatter",
  },

  /**
   * Reaching the publication. Every alias below routes to `contact.email`; they exist
   * so a reader knows which hat to address rather than so mail arrives in six places.
   */
  contact: {
    email: "slopeandscatter@gmail.com",
    routes: [
      { address: "corrections@slopeandscatter.com", purpose: "Something we got wrong." },
      { address: "tips@slopeandscatter.com", purpose: "A question worth measuring." },
      {
        address: "data@slopeandscatter.com",
        purpose: "Datasets, methodology, reproducing a model.",
      },
      { address: "press@slopeandscatter.com", purpose: "Press and syndication." },
      { address: "info@slopeandscatter.com", purpose: "Anything else." },
      { address: "hello@slopeandscatter.com", purpose: "Also anything else." },
    ],
    // One handle, everywhere: @slopeandscatter.
    // NOTE: Reddit is written as a USER profile. If slopeandscatter is a subreddit
    // rather than an account, change this one line to https://www.reddit.com/r/slopeandscatter/.
    socials: [
      { label: "X", url: "https://x.com/slopeandscatter" },
      { label: "Instagram", url: "https://www.instagram.com/slopeandscatter/" },
      { label: "TikTok", url: "https://www.tiktok.com/@slopeandscatter" },
      { label: "YouTube", url: "https://www.youtube.com/@slopeandscatter" },
      { label: "Reddit", url: "https://www.reddit.com/user/slopeandscatter/" },
    ],
  },

  // Default image for meta tags when a page has none of its own.
  // TODO: create this asset — a 1200x630 OG card using the wordmark on paper.
  defaultImage: {
    src: "/images/og-default.png",
    alt: "Slope & Scatter",
  },
};

export default siteData;
