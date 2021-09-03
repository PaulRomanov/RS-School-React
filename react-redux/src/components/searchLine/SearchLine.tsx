import React, { ChangeEvent, FC, useState } from 'react';
import './searchLine.scss';
import { Props } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';
import { InitialStateType, setSearchValueActionCreator } from '../../redux/searchArticlesReduser';
import { API_KEY } from '../../pages/MainPage';

const SearchLine: FC<Props> = ({ setSearchValueData, searchSubmit, sortBy, pageSize, page }) => {
  const dispatch = useDispatch();

  const searchInputValue = useSelector<AppRootStateType, string>(
    (state) => state.articles.searchValue
  );

  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
  //   // e.preventDefault();
  //   setIsLoading(true);
  //   setSearchValueActionCreator(e.currentTarget.value);
  //   setIsLoading(false);
  // };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setSearchValue(value);
  // };

  const searchInputSubmit = () => {
    searchSubmit(searchInputValue, API_KEY, sortBy, pageSize, page);
  }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { value } = e.target;
    dispatch(setSearchValueActionCreator(e.currentTarget.value));
  };
  // onSubmit={handleSubmit}
  return (
    <div className="serch-page">
      <div className="form-wrapper">
        <form className="search-gr" > 
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              value={searchInputValue}
              onChange={handleChange}
              className="input"
            />
            <button id="submit" type="submit" disabled={isLoading} onClick={searchInputSubmit}>
              {isLoading ? 'Loding...' : 'Search'}
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchLine;
