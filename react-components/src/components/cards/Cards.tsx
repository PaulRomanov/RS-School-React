/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './cards.scss';

const Cards = (props: {
  image: string | undefined;
  word:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  translation:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="cards-element-wrapper">
      <img src={props.image} alt="img" />
      <h3> {props.word}</h3>
      <p>translation: {props.translation}</p>
    </div>
  );
};

export default Cards;
