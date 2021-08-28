import React, { ChangeEvent, FC, useState } from 'react';
import './searchLine.scss';
import { Props } from '../../type';

const SearchLine: FC<Props> = ({ setSearchValueData }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchValueData(searchValue);
    setIsLoading(false);
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
