import { FloatingvideoApi } from '@/types';
import { getEndpoint } from './serviceEndpoints';
import { config } from '@/config';
import { FloatingvideoApiListTofloatingvideoList } from '../adapters/floatingvideo.adapter';

export async function serviceGetFloatingvideo() {
  try {
    const response = await fetch(getEndpoint('floatingvideos'));
    if (response.ok) {
      const data: FloatingvideoApi[] = await response.json();
      const floatingvideos = FloatingvideoApiListTofloatingvideoList(data);

      return floatingvideos[0];
    }
    throw config.errors.EMPTYLIST;
  } catch (error) {
    throw error;
  }
}
