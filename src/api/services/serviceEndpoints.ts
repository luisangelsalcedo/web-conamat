import { config } from '@/config';

const base = config.apiUrl;

interface GetEndpoint {
  (
    key: 'menuitems' | 'sliders' | 'posts' | 'pages' | 'media',
    config?: {
      id?: number;
      slug?: string;
      page?: number;
      limit?: number;
    }
  ): string;
}

const params = {
  menuitems: {
    key: 'menuitems',
    field: '_fields=id,slug,status,acf,name',
  },
  sliders: {
    key: 'sliders',
    field: '_fields=id,slug,status,acf,title,featured_media',
  },
  posts: {
    key: 'posts',
    field:
      '_fields=id,slug,status,acf,title,content,excerpt,featured_media,categories',
  },
  pages: {
    key: 'pages',
    field:
      '_fields=id,slug,status,acf,title,content,excerpt,menuitems,menu_order',
  },
  media: {
    key: 'media',
    field: '_fields=id,slug,status,acf,title,guid,media_details',
  },
};

export const getEndpoint: GetEndpoint = (key, config = {}): string => {
  const { id, slug, page, limit = 100 } = config;

  if (Object.keys(params).some(item => key === item)) {
    let endpoint = `${base}/${key}`;

    endpoint = id ? `${endpoint}/${id}` : endpoint;
    endpoint = `${endpoint}?${params[key].field}`;
    endpoint = slug ? `${endpoint}&slug=${slug}` : endpoint;
    endpoint = page ? `${endpoint}&page=${page}` : endpoint;
    endpoint = limit ? `${endpoint}&per_page=${limit}` : endpoint;

    return endpoint;
  }
  throw new Error('Endpoint no found');
};
