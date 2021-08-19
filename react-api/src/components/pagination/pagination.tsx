import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { PaginationProps } from '../../type';
import './pagination.scss';

const Pagination: FC<PaginationProps> = ({
  page,
  onChangePage,
  pageSize,
  paginate,
  setPageSize,
}) => {
  const [paginPage, setPaginPage] = useState<number | string>('');
  const pageNumber = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(100 / pageSize); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    setPaginPage(page);
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangePage(newValue);
      setPaginPage(newValue);
    } else {
      setPaginPage('');
    }
  };

  const handlePageSize = (e: { target: { value: any } }) => {
    const { value } = e.target;

    setPageSize(value);
    paginate(1);
  };

  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        <input type="text" value={paginPage} onChange={handleChange} />
      </div>
      {pageNumber.map((number) => (
        <button type="button" key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
      <select name="ItemsOnPage " onBlur={handlePageSize}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Pagination;
