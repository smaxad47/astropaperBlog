import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bbllog.epyso.org/",
  author: "smaxad47",
  desc: "NONONO",
  title: "FoS",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 9,
};

export const LOCALE = []; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:315451609@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: "Github",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: ` ${SITE.title} on Github`,
  //   active: true,
  // },
  // {
  //   name: "Twitter",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: false,
  // },
  // {
  //   name: "Discord",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
];