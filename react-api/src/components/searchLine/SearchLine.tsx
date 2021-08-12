import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FC, useState } from 'react';
import axiosInstance from '../../services/api';
import './searchLine.scss';
import { GET200_Articles, Props } from '../../type';
// import Card from '../card/Card';

const API_KEY = '6acc09f802644746b9fafbaeda30a3d6';

const SearchLine: FC<Props> = ({ setState }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [state, setState] = useState<any>([]);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        // `api/json/v1/1/filter.php?i=${searchValue}`,
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}`,
      );

      // setState(response.data.drinks);
      setState(response.data.articles);
      // console.log(response.data.drinks);

      // return response;
    } catch (err: any) {
      console.error(e);
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
