import React, { FC } from 'react';
import './card.scss';
import { CardProps } from '../../type';

const Card: FC<CardProps> = ({ itemElement }) => {
  return (
    <div className="card-wrapper">
      <div>{itemElement.author}</div>
      <div>{itemElement.title}</div>
      <div>{itemElement.content}</div>
    </div>
  );
};

export default Card;
