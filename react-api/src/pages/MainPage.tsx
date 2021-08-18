import { useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType, SortType } from '../type';
import RadioBtn from '../components/radioBtn/radioBtn';
import Pagination from '../components/pagination/pagination';

const MainPage = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const paginate = (pageNumber: number) => setPage(pageNumber);

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
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        paginate={paginate}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default MainPage;
