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
