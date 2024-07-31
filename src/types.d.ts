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
