import React, { FC } from 'react';
import { SortProps, SortType } from '../../type';
import './radioBtn.scss';

const RadioBtn: FC<SortProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="radio-btn-wrapper">
      {/* <div className="form_radio_btn">
        <label htmlFor="radio-1" className="label-male">
          <input
            id="radio-1"
            type="radio"
            name="radioBtn"
            value={SortType.relevancy}
            checked={sortBy === SortType.relevancy}
            onChange={() => setSortBy(SortType.relevancy)}
          />
          relevancy
        </label>
      </div>
      <div className="form_radio_btn">
        <label htmlFor="radio-2">
          popularity
          <input
            id="radio-2"
            type="radio"
            name="radioBtn"
            value={SortType.popularity}
            checked={sortBy === SortType.popularity}
            onChange={() => setSortBy(SortType.popularity)}
          />
        </label>
      </div>
      <div className="form_radio_btn">
        <label htmlFor="radio-3">
          publishedAt
          <input
            id="radio-3"
            type="radio"
            name="radioBtn"
            value={SortType.publishedAt}
            checked={sortBy === SortType.publishedAt}
            onChange={() => setSortBy(SortType.publishedAt)}
          />
        </label>
      </div> */}

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
