import { Media } from '@/types';
import { config } from '@/config';
import { mediaApiToMedia } from '@/adapters';

const endpoint = (id: number) =>
  `${config.apiUrl}/media/${id}?_fields=id,title,guid,media_details`;

export function serviceGetMedia(id: number) {
  return new Promise<Media>((resolve, reject) => {
    fetch(endpoint(id))
      .then(response => response.ok && response.json())
      .then(data => resolve(mediaApiToMedia(data)))
      .catch(() =>
        reject({
          status: 400,
          message: 'badRequest',
        })
      );
  });
}
