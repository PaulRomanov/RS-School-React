import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FC, useState } from 'react';
import axiosInstance from '../../services/api';
import './searchLine.scss';
import { GET200_Articles, Props } from '../../type';

const API_KEY = '90b034fec9b24e1cbad655a0092d8e7f';

const SearchLine: FC<Props> = ({ setState, sortBy }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<Number>(1);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        // `api/json/v1/1/filter.php?i=${searchValue}`,
        // `v2/everything?q=${searchValue}&apiKey=${API_KEY}`,
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=10&page=${page}`,
      );

      // setState(response.data.drinks);
      setState(response.data.articles);
      // console.log(response.data.drinks);

      // return response;
    } catch (err: any) {
      // console.error(e);
    } finally {
      setIsLoading(false);
    }
    return Response;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="serch-page">
      <div className="form-wrapper">
        <form className="search-gr" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={handleChange}
              className="input"
            />
            <button id="submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Loding...' : 'Search'}
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchLine;
