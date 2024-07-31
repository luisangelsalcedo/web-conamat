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
// * ----------------------------------------- Media
export interface Media {
  id: number | string;
  src: string;
  title: string;
  sizes: Sizes;
}
export interface MediaApi {
  id: number;
  guid: GUID;
  title: GUID;
  media_details: MediaDetails;
}

// * ----------------------------------------- MenuItem
export interface MenuItem {
  id: number;
  label: string;
  href: string;
  active: boolean;
  target: string;
  slug: string;
  sort: number;
  className: string;
}
export interface MenuItemApi {
  id: number;
  name: string;
  slug: string;
  acf: Acf;
}

// * ----------------------------------------- Page
export interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  menuitem: number[];
  sort: number;
  className: string;
  href: string;
  target: string;
}
export interface PageApi {
  id: number;
  slug: string;
  status: string;
  title: GUID;
  content: GUID;
  excerpt: GUID;
  menu_order: number;
  menuitems: number[];
  acf: Acf;
}

// * ----------------------------------------- Slider
export interface Slider {
  id: number;
  title: string;
  status: string;
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
  status: string;
  title: GUID;
  featured_media: number;
  acf: Acf;
}
// * ----------------------------------------- BlogItem
export interface BlogItem {
  id: number;
  title: string;
  slug: string;
  mediaId: number;
  status: string;
  content: string;
  excerpt: string;
  image?: Media;
  categories?: number[];
  sort: number;
  publicationDate: string;
  className: string;
  highlight: boolean;
}
export interface BlogItemApi {
  id: number;
  slug: string;
  status: string;
  title: GUID;
  content: GUID;
  excerpt: GUID;
  featured_media: number;
  categories: number[];
  acf: Acf;
}
