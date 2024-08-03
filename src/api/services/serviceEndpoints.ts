import { config } from '@/config';

const base = config.apiUrl;

interface GetEndpoint {
  (
    key: 'menuitems' | 'sliders' | 'posts' | 'pages' | 'media',
    config?: { id?: number; slug?: string; page?: number }
  ): string;
}

const params = {
  menuitems: {
    key: 'menuitems',
    field: '_fields=id,slug,status,acf,name',
    limit: 'per_page=100',
  },
  sliders: {
    key: 'sliders',
    field: '_fields=id,slug,status,acf,title,featured_media',
    limit: 'per_page=100',
  },
  posts: {
    key: 'posts',
    field:
      '_fields=id,slug,status,acf,title,content,excerpt,featured_media,categories',
    limit: 'per_page=20',
  },
  pages: {
    key: 'pages',
    field:
      '_fields=id,slug,status,acf,title,content,excerpt,menuitems,menu_order',
    limit: 'per_page=100',
  },
  media: {
    key: 'media',
    field: '_fields=id,slug,status,acf,title,guid,media_details',
    limit: 'per_page=100',
  },
};

export const getEndpoint: GetEndpoint = (key, config = {}): string => {
  const { id, slug, page } = config;

  if (Object.keys(params).some(item => key === item)) {
    let endpoint = `${base}/${key}`;

    endpoint = id ? `${endpoint}/${id}` : endpoint;
    endpoint = `${endpoint}?${params[key].field}&${params[key].limit}`;
    endpoint = slug ? `${endpoint}&slug=${slug}` : endpoint;
    endpoint = page ? `${endpoint}&page=${page}` : endpoint;

    return endpoint;
  }
  throw new Error('Endpoint no found');
};
