import React from 'react';
import './SearchLine.scss';

export const SearchLine = () => {
  return (
    <div className="serch-page">
      <form className="form-wrapper">
        <input id="search" placeholder="Site search..." type="text" />
        <input value="Поиск" id="submit" type="submit" />
      </form>
    </div>
  );
};


