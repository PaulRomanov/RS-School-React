import { disconnect } from 'process';
import React, { useEffect, useState } from 'react';
import './card.scss';

type CardProps = {
  item: {
    user_name: string;
    user_surname: string;
    radioBtn: string;
    birthDate: string;
    jobPosition: string;
  };
}


const Card = ({ item }: CardProps) => {

  return (
    <div className="card-wrapper">

      <div className="card-item">
        <div className="description-item">Name:</div>
        {item.user_name}
      </div>
      <div className="card-item">
        <div className="description-item">Surname:</div>
        {item.user_surname}
      </div>
      <div className="card-item">
        <div className="description-item">Date of Birth:</div>
        {item.birthDate}
      </div>
      <div className="card-item">
        <div className="description-item">Gender: </div>
        {item.radioBtn}
      </div>
      <div className="card-item">
        <div className="description-item">Vacancy:</div>
        {item.jobPosition}
      </div>

    </div>
  )
};

export default Card;
