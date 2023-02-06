import { useMemo } from 'react';
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg';
import ArrowRightIcon from '@/assets/icons/arrow_right.svg';
import * as styles from './Pagination.styles';
import { PAGE_SIZE, ITEM_SIZE } from '@/constants';

interface PaginationProps {
  totalCount: number;
  pageNo: number;
  handleClickPagination: (no: number) => void;
}

function Pagination({
  totalCount,
  pageNo,
  handleClickPagination,
}: PaginationProps) {
  const startPageNo = useMemo(
    () => PAGE_SIZE * (Math.ceil(pageNo / PAGE_SIZE) - 1) + 1,
    [pageNo],
  );

  const lastPageNo = useMemo(
    () => Math.ceil(totalCount / ITEM_SIZE),
    [totalCount],
  );

  const pageNos: number[] = useMemo(() => {
    const pageSize = Math.min(PAGE_SIZE, lastPageNo - startPageNo + 1);
    return Array.from({ length: pageSize }, (_, i) => startPageNo + i);
  }, [startPageNo, lastPageNo]);

  const handleClickArrow = (i: number) => {
    const nextPageNo = startPageNo + PAGE_SIZE * i;
    if (nextPageNo < 1 || nextPageNo > lastPageNo) return;
    handleClickPagination(nextPageNo);
  };

  return (
    <div css={styles.wrapper}>
      <button
        css={[styles.arrow, 1 === startPageNo ? styles.hidden : '']}
        onClick={() => handleClickArrow(-1)}
      >
        <ArrowLeftIcon />
      </button>
      {pageNos.map(no => (
        <button
          key={no}
          css={[styles.button, pageNo === no ? styles.selected : '']}
          onClick={() => handleClickPagination(no)}
        >
          {no}
        </button>
      ))}

      <button
        css={[
          styles.arrow,
          lastPageNo < startPageNo + PAGE_SIZE ? styles.hidden : '',
        ]}
        onClick={() => handleClickArrow(1)}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default Pagination;
