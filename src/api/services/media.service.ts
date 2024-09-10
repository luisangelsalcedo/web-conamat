import { MediaApi } from '@/types';
import { mediaApiToMedia } from '@/api/adapters';
import { getEndpoint } from './serviceEndpoints';

export async function serviceGetMedia(id: number) {
  try {
    const response = await fetch(getEndpoint('media', { id }));
    if (response.ok) {
      const data: MediaApi = await response.json();
      return mediaApiToMedia(data);
    }
  } catch (error) {
    throw error;
  }
}

// export function serviceGetMedia(id: number) {
//   return new Promise<Media>(resolve => {
//     fetch(getEndpoint('media', { id }))
//       .then(response => response.ok && response.json())
//       .then(data => resolve(mediaApiToMedia(data)))
//       .catch(error => {
//         console.log(error);
//       });
//   });
// }
