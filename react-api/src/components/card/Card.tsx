import React, { FC } from 'react';
import './card.scss';
import { CardProps } from '../../type';

const Card: FC<CardProps> = ({ itemElement }) => {
  return (
    <div className="card-wrapper">
      {/* <div>{itemElement.strDrink}</div> */}
      <div className="card-author">
        Author: <span>{itemElement.author}</span>
      </div>
      <div className="card-title">
        Title:<span>{itemElement.title}</span>{' '}
      </div>
      <div className="card-content">
        Content:<span>{itemElement.content}</span>{' '}
      </div>
      <img src={itemElement.urlToImage} alt="foto" />
    </div>
  );
};

export default Card;
