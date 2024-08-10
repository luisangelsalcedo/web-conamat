import { Media } from '@/types';
import { mediaApiToMedia } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';

export function serviceGetMedia(id: number) {
  return new Promise<Media>(resolve => {
    fetch(getEndpoint('media', { id }))
      .then(response => response.ok && response.json())
      .then(data => resolve(mediaApiToMedia(data)))
      .catch(error => {
        throw error;
      });
  });
}
