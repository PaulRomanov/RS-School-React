import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { PaginationProps } from '../../type';
import './pagination.scss';

const Pagination: FC<PaginationProps> = ({ page, onChangePage, pageSize, paginate }) => {
  const [paginPage, setPaginPage] = useState<number | string>('');
  const pageNumber = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(pageSize); i++) {
    pageNumber.push(i);
    // console.log(pageNumber);
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
    // const newValue = matchedValue ? +matchedValue[0] : ''
  };
  // const numPage = 100 / pageSize;

  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        <input type="text" value={paginPage} onChange={handleChange} />
      </div>
      {/* <div>{numPage}</div> */}
      <ul>
        {pageNumber.map((number) => (
          <li className="page-item" key={number}>
            <a href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
