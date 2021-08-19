import React, { FC } from 'react';
import { SortProps, SortType } from '../../type';
import './radioBtn.scss';

const RadioBtn: FC<SortProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="radio-btn-wrapper">
      <label htmlFor="maleRadio" className="label-male">
        relevancy
        <input
          type="radio"
          name="radioBtn"
          value={SortType.relevancy}
          checked={sortBy === SortType.relevancy}
          onChange={() => setSortBy(SortType.relevancy)}
        />
      </label>
      <label htmlFor="radioBtn">
        popularity
        <input
          type="radio"
          name="radioBtn"
          value={SortType.popularity}
          checked={sortBy === SortType.popularity}
          onChange={() => setSortBy(SortType.popularity)}
        />
      </label>
      <label htmlFor="radioBtn">
        publishedAt
        <input
          type="radio"
          name="radioBtn"
          value={SortType.publishedAt}
          checked={sortBy === SortType.publishedAt}
          onChange={() => setSortBy(SortType.publishedAt)}
        />
      </label>
    </div>
  );
};

export default RadioBtn;
