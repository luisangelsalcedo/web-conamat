export const config = {
  baseUrl: import.meta.env.BASE_URL,
  apiUrl: 'https://www.conamat.edu.pe/api/wp-json/wp/v2',
  nofoundUrl: '/no-found-page',
  errors: {
    PAGENOFOUND: 'Page no found',
    EMPTYLIST: 'Empty list',
  },
  limits: {
    videos: 15,
    posts: 10,
    galleries: 12,
  },
};
