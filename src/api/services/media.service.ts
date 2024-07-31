import { Media } from '@/types';
import { mediaApiToMedia } from '@/api/adapters';
import { endpoints } from './serviceEndpoints';

export function serviceGetMedia(id: number) {
  return new Promise<Media>((resolve, reject) => {
    fetch(endpoints.media.GETBYID(id))
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
