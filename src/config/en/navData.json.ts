/**
 * * Site navigation.
 *
 * One level of dropdown is supported. Mega menus look best with 3-5 columns.
 * Icons live in src/icons — filename "tabler/icon.svg" is entered as "tabler/icon".
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Questions",
    link: "/blog/",
  },
  {
    text: "Desks",
    link: "/desks/",
  },
  {
    text: "Method",
    link: "/method/",
  },
  {
    text: "Contact",
    link: "/contact/",
  },
];

export default navConfig;
