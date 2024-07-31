import { config } from '@/config';

const base = config.apiUrl;

export const endpoints = {
  blogItem: {
    GETALL: (page: number) =>
      `${base}/posts?page=${page}&_fields=id,slug,title,content,excerpt,featured_media,status,categories,acf`,
    GETBYID: (id: number) =>
      `${base}/posts/${id}?_fields=id,slug,title,content,excerpt,featured_media,status,categories,acf`,
  },
  menuItems: {
    GETALL: `${base}/menuitems?_fields=id,name,slug,acf`,
  },
  media: {
    GETBYID: (id: number) =>
      `${base}/media/${id}?_fields=id,title,guid,media_details`,
  },
  page: {
    GETALL: `${base}/pages?_fields=id,title,slug,content,excerpt,status,menuitems,menu_order,acf`,
  },
  slider: {
    GETALL: `${base}/sliders?_fields=id,title,featured_media,status,acf`,
  },
};
