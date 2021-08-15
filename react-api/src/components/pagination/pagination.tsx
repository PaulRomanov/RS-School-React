import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { PaginationProps } from '../../type';

const Pagination: FC<PaginationProps> = ({ page, onChangePage }) => {
  const [paginPage, setPaginPage] = useState<number | string>('');

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

  return (
    <div className="pagination">
      <input type="text" value={paginPage} onChange={handleChange} />
    </div>
  );
};

export default Pagination;
