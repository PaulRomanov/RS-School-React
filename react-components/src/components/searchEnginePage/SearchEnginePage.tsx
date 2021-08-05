import React from 'react';
import './searchEnginePage.scss';

const SearchEnginePage = () => {
  return (
    <div className="serch-page">
      <form className="form-wrapper">
        <input id="search" placeholder="Site search..." type="text" />
        <input value="Поиск" id="submit" type="submit" />
      </form>
    </div>
  );
};

export default SearchEnginePage;
