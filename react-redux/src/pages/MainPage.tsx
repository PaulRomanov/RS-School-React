import { useEffect, useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType, SortType } from '../type';
import RadioBtn from '../components/radioBtn/radioBtn';
import Pagination from '../components/pagination/pagination';
import Header from '../components/header/Header';
import './mainPage.scss';
import axiosInstance, { getArticlesLink } from '../services/api';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import axios from 'axios';

export const API_KEY = '90b034fec9b24e1cbad655a0092d8e7f';

const MainPage = () => {
  const [state, setState] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchValueData, setSearchValueData] = useState<string>('w');

  const searchInputValue = useSelector<AppRootStateType, string>(
    (state) => state.articles.searchValue
  );
  

  const getAvatar = async (searchInputValue: string, API_KEY: string, sortBy: SortType, pageSize: number, page: number): Promise<any> => {
    const articles = await axios.get(`https://newsapi.org/v2/everything?q=${searchInputValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`);
    console.log(articles);
  }

  useEffect(() => {
    try {
      getAvatar(searchInputValue, API_KEY, sortBy, pageSize, page)


    } catch (err: any) {
      // console.error(err);
    }
  }, [page, pageSize, searchInputValue, sortBy])



  const searchSubmit = async (searchInputValue: string, API_KEY: string, sortBy: SortType, pageSize: number, page: number) => {
    try {
      debugger
      const data = await getArticlesLink(searchInputValue, API_KEY, sortBy, pageSize, page)
      setState(data.data.articles);

    }
    catch (err) {
      return console.log(err);

    }
  }




  // useEffect(() => {
  //   try {
  //     axiosInstance
  //       .get(
  //         `v2/everything?q=${searchInputValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
  //       )
  //       .then((response) => setState(response.data.articles));
  //   } catch (err: any) {
  //     // console.error(err);
  //   }
  // }, [page, pageSize, searchInputValue, sortBy]);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className="page-wrap">
      <Header />
      <SearchLine
        setSearchValueData={setSearchValueData}
        searchSubmit={searchSubmit}
        sortBy={sortBy}
        pageSize={pageSize}
        page={page} />
      <RadioBtn setSortBy={setSortBy} sortBy={sortBy} />
      <Pagination
        page={page}
        pageSize={pageSize}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        paginate={paginate}
        setPageSize={setPageSize}
      />
      {state.map((itemElement, index) => {
        return <Card key={index.toString()} itemElement={itemElement} />;
      })}
    </div>
  );
};

export default MainPage;
