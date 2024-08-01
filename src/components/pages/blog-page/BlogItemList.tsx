import { BlogItemSmall } from '@/components/molecules';
import { BlogItem } from '@/types';

interface Props {
  data: BlogItem[];
}

export function BlogItemList({ data }: Props) {
  return (
    <div>
      {data && data.length <= 0
        ? 'Empty elements'
        : data.map(item => <BlogItemSmall data={item} key={item.id} />)}
    </div>
  );
}
