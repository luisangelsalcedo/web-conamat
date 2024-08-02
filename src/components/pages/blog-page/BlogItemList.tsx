import { BlogItemSmall, EmptyElements } from '@/components/molecules';
import { BlogItem } from '@/types';

interface Props {
  data: BlogItem[];
  loadComplete?: boolean;
}

export function BlogItemList({ data, loadComplete = true }: Props) {
  return (
    <>
      {loadComplete && data.length <= 0 ? (
        <EmptyElements />
      ) : (
        data.map(item => <BlogItemSmall data={item} key={item.id} />)
      )}
    </>
  );
}
