import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import Title from '@/components/@common/Title/Title';
import { useCourseBasedList } from '@/hooks/queries/course';
import { AreaProps } from '@/types/area';

function CourseList({ areaCode, sigunguCode, title }: AreaProps) {
  const { data } = useCourseBasedList({ areaCode, sigunguCode });

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <Title>
        <h1>
          <label>여행코스</label> : {title}
        </h1>
        <p>총 {data.totalCount} 개 관광지</p>
      </Title>
      {data.items.length === 0 ? <Empty /> : <List data={data?.items} />}
    </div>
  );
}

export default CourseList;
