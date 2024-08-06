declare global {
  // eslint-disable-next-line no-unused-vars
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}

export interface Acf {
  href: string;
  target: string;
  active: boolean;
  sort: number;
  css_class: string;
  publication_date: string;
  highlight: boolean;
  main_image: number;
  mobile_image: number;
  full_image: number;
  id_youttube_video: string;
}
export interface GUID {
  rendered: string;
}
export interface Full {
  source_url: string;
}
export interface Sizes {
  thumbnail?: Full;
  medium?: Full;
  medium_large?: Full;
  large?: Full;
  full?: Full;
}
export interface MediaDetails {
  sizes: Sizes;
}

export interface PagesGroups {
  [key: string]: Page[];
}

export interface MenuItemsWithPages {
  menu: MenuItem;
  submenu: Page[];
}
// * ----------------------------------------- Media
export interface Media {
  id: number | string;
  slug: string;
  src: string;
  title: string;
  sizes: Sizes;
}
export interface MediaApi {
  id: number;
  slug: string;
  guid: GUID;
  title: GUID;
  media_details: MediaDetails;
}

// * ----------------------------------------- MenuItem
export interface MenuItem {
  id: number;
  slug: string;
  label: string;
  href: string;
  active: boolean;
  target: string;
  sort: number;
  className: string;
}
export interface MenuItemApi {
  id: number;
  slug: string;
  acf: Acf;
  name: string;
}

// * ----------------------------------------- Page
export interface Page {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  menuitem: number[];
  sort: number;
  className: string;
  href: string;
  target: string;
}
export interface PageApi {
  id: number;
  slug: string;
  acf: Acf;
  title: GUID;
  content: GUID;
  excerpt: GUID;
  menu_order: number;
  menuitems: number[];
}

// * ----------------------------------------- Slider
export interface Slider {
  id: number;
  slug: string;
  title: string;
  href: string;
  target: string;
  sort: number;
  mediaId: number;
  mediaIdMobile: number;
  image?: Media;
  mobileImage?: Media;
}
export interface SliderApi {
  id: number;
  slug: string;
  acf: Acf;
  title: GUID;
  featured_media: number;
}
// * ----------------------------------------- Post
export interface Post {
  id: number;
  slug: string;
  title: string;
  mediaId: number;
  content: string;
  excerpt: string;
  image?: Media;
  categories?: number[];
  sort: number;
  publicationDate: string;
  className: string;
  highlight: boolean;
  href: string;
}
export interface PostApi {
  id: number;
  slug: string;
  acf: Acf;
  title: GUID;
  content: GUID;
  excerpt: GUID;
  featured_media: number;
  categories: number[];
}
// * ----------------------------------------- Video
export interface Video {
  id: number;
  title: string;
  videoID: string;
  sort: number;
  publicationDate: string;
  className: string;
  highlight: boolean;
  href: string;
  embed: string;
  image?: Media;
}
export interface VideoApi {
  id: number;
  guid: GUID;
  slug: string;
  title: GUID;
  acf: Acf;
}
