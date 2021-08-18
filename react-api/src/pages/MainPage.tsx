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
  const [page, setPage] = useState<Number>(1);
  const [pageSize] = useState<Number>(10);
  const [pageArr] = useState([]);

  // const lastPage: number = page * pageSize;
  // const firstPage = lastPage - pageSize;
  // const currentPage = pageArr.slice(firstPage, lastPage);
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className="page-wrap">
      <SearchLine setState={setState} sortBy={sortBy} page={page} pageSize={pageSize} />
      <RadioBtn setSortBy={setSortBy} sortBy={sortBy} />
      {state.map((itemElement, index) => {
        return <Card key={index.toString()} itemElement={itemElement} />;
      })}
      <Pagination
        page={page}
        pageSize={pageSize}
        totalPages={pageArr.length}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPage;
