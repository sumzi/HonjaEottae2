import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import Pagination from '@/components/@common/Pagination/Pagination';
import Title from '@/components/@common/Title/Title';
import { useCourseBasedList } from '@/hooks/queries/course';

interface CourseListProps {
  areaCode: string;
  sigunguCode: string;
  title: string;
  pageNo: number;
  handleClickPagination: (no: number) => void;
}

function CourseList({
  areaCode,
  sigunguCode,
  pageNo,
  title,
  handleClickPagination,
}: CourseListProps) {
  const { data } = useCourseBasedList({ areaCode, sigunguCode, pageNo });

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
      {data.items.length === 0 ? (
        <Empty />
      ) : (
        <>
          <List data={data.items} />
          <Pagination
            totalCount={data.totalCount}
            pageNo={pageNo}
            handleClickPagination={handleClickPagination}
          />
        </>
      )}
    </div>
  );
}

export default CourseList;
