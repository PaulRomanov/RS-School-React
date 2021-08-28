import { useEffect, useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType, SortType } from '../type';
import RadioBtn from '../components/radioBtn/radioBtn';
import Pagination from '../components/pagination/pagination';
import Header from '../components/header/Header';
import './mainPage.scss';
import axiosInstance from '../services/api';

const API_KEY = '90b034fec9b24e1cbad655a0092d8e7f';

const MainPage = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchValueData, setSearchValueData] = useState<string>('w');

  useEffect(() => {
    try {
      axiosInstance
        .get(
          `v2/everything?q=${searchValueData}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
        )
        .then((response) => setState(response.data.articles));
    } catch (err: any) {
      // console.error(err);
    }
  }, [page, pageSize, searchValueData, sortBy]);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className="page-wrap">
      <Header />
      <SearchLine setSearchValueData={setSearchValueData} />
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
