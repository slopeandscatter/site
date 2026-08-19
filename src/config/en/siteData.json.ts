import { type SiteDataProps } from "../types/configDataTypes";

const siteData: SiteDataProps = {
  name: "Slope & Scatter",
  // Your website's title and description (meta fields)
  title: "Slope & Scatter — curiosity, measured",
  description:
    "Questions nobody bothered to measure. Infrastructure, rent, games, sport, film — every piece ships the model behind the answer, and every assumption it rests on.",

  // Your information for blog post purposes
  author: {
    name: "Mark Ly",
    email: "ly.mark@gmail.com",
    twitter: "",
  },

  // Default image for meta tags when a page has none of its own.
  // TODO: create this asset — a 1200x630 OG card using the wordmark on paper.
  defaultImage: {
    src: "/images/og-default.png",
    alt: "Slope & Scatter",
  },
};

export default siteData;
