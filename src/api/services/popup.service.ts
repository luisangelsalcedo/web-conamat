import { getEndpoint } from './serviceEndpoints';
import { Popup, PopupApi } from '@/types';
import { popupApiToPopup } from '../adapters';
import { serviceGetMedia } from './media.service';

export async function serviceGetAllPopups() {
  try {
    const response = await fetch(getEndpoint('popup', { limit: 100 }));
    const data: PopupApi[] = await response.json();

    const popups: Popup[] = await Promise.all(
      data.map(async (item: PopupApi) => {
        const popup = popupApiToPopup(item);

        const mediaId = popup.mediaId;

        if (mediaId) {
          const image = await serviceGetMedia(mediaId);
          popup.image = image;
        }

        return popup;
      })
    );
    return popups.toSorted((a, b) => a.sort - b.sort);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
