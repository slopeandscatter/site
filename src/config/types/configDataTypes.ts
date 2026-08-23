// site data types
export interface SiteDataProps {
  name: string;
  title: string;
  description: string;
  author: {
    // used for blog post purposes
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  /**
   * How to reach the PUBLICATION, as distinct from who wrote a given piece.
   * `author.email` answers "who is this by"; this answers "where do I send a
   * correction". They are different questions and were previously the same field.
   */
  contact: {
    /** the inbox everything actually lands in */
    email: string;
    /** routed aliases, in the order they should be listed */
    routes: { address: string; purpose: string }[];
    /** real accounts only — an empty list renders no social section at all */
    socials: { label: string; url: string }[];
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// --------------------------------------------------------
// nav data types
export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
  icon?: string; // adds an icon to the left of the text
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export interface navMegaDropdownColumn {
  title: string;
  items: navLinkItem[];
}

export interface navMegaDropdownItem {
  text: string;
  megaMenuColumns: navMegaDropdownColumn[];
}

export type navItem = navLinkItem | navDropdownItem | navMegaDropdownItem;

// --------------------------------------------------------
// faq data types
export interface FaqItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

// --------------------------------------------------------
// testimonial data types
export interface TestimonialItem {
  avatar: ImageMetadata; // an imported image
  name: string;
  title: string;
  testimonial: string;
}

// --------------------------------------------------------
// team data types
export interface teamMember {
  image: ImageMetadata; // an imported image
  name: string;
  title: string;
  bio: string;
}

// --------------------------------------------------------
// site settings types
export interface SiteSettingsProps {
  useViewTransitions?: boolean;
  useAnimations?: boolean;
}
