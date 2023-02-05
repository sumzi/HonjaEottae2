import List from '@/components/@common/List/List';
import Title from '@/components/@common/Title/Title';
import { useAreaBasedList } from '@/hooks/queries/area';
import { AreaProps } from '@/types/area';

function AreaList({ areaCode, sigunguCode, title }: AreaProps) {
  const { data } = useAreaBasedList({ areaCode, sigunguCode });

  return (
    <div>
      <Title>
        <h1>{title}</h1>
        <p>총 {data?.totalCount} 개 관광지</p>
      </Title>
      <List data={data?.items} />
    </div>
  );
}

export default AreaList;
