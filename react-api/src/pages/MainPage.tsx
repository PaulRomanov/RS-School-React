import { useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType, SortType } from '../type';
import RadioBtn from '../components/radioBtn/radioBtn';
import Pagination from '../components/pagination/pagination';

const MainPage = () => {
  // const [state, setState] = useState<any>({ drinks: [] });
  const [state, setState] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  // const [pageArr] = useState([]);

  // const lastPage: number = page * pageSize;
  // const firstPage = lastPage - pageSize;
  // const currentPage = pageArr.slice(firstPage, lastPage);
  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className="page-wrap">
      <SearchLine
        setState={setState}
        sortBy={sortBy}
        page={page}
        pageSize={pageSize}
        // totalPages={totalPages}
      />
      <RadioBtn setSortBy={setSortBy} sortBy={sortBy} />
      {state.map((itemElement, index) => {
        return <Card key={index.toString()} itemElement={itemElement} />;
      })}
      <Pagination
        page={page}
        pageSize={pageSize}
        // totalResults={pageArr.length}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        paginate={paginate}
        // onChangePageSize={(pageSizeFromInput: number) => setPageSize(pageSizeFromInput)}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default MainPage;
