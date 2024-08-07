import { useAtom, useSetAtom } from 'jotai';
import { getPopupsAtom, popupsAtom } from '@/store';

export function usePopups() {
  const [popups] = useAtom(popupsAtom);
  const getPopups = useSetAtom(getPopupsAtom);

  return { popups, getPopups };
}
