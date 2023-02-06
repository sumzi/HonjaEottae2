import Empty from '@/components/@common/Empty/Empty';
import List from '@/components/@common/List/List';
import Pagination from '@/components/@common/Pagination/Pagination';
import Title from '@/components/@common/Title/Title';
import { useAreaBasedList } from '@/hooks/queries/area';

interface AreaListProps {
  areaCode: string;
  sigunguCode: string;
  title: string;
  pageNo: number;
  handleClickPagination: (no: number) => void;
}

function AreaList({
  areaCode,
  sigunguCode,
  pageNo,
  title,
  handleClickPagination,
}: AreaListProps) {
  const { data } = useAreaBasedList({ areaCode, sigunguCode, pageNo });

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <Title>
        <h1>
          <label>지역</label> : {title}
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

export default AreaList;
