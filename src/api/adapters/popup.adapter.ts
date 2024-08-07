import type { Popup, PopupApi } from '@/types';

export const popupApiToPopup = (data: PopupApi): Popup => ({
  id: data.id,
  title: data.title.rendered,
  slug: data.slug,
  href: data.acf.href,
  target: data.acf.target,
  sort: data.acf.sort,
  className: data.acf.css_class,
  mediaId: data.acf.main_image,
});

export const popupApiListToPopupList = (list: PopupApi[]): Popup[] =>
  list.map(item => popupApiToPopup(item));
