import { disconnect } from 'process';
import React, { FC, useEffect, useState } from 'react';
import './card.scss';

export interface itemProps {
  itemI: item2Props;
}

export interface item2Props {
  user_name: string;
  user_surname: string;
  radioBtn: string | boolean;
  birthDate: string;
  jobPosition: string | undefined;
  agreeCheck: boolean;
}

const Card: FC<itemProps> = ({ itemI }) => {
  return (
    <div className="card-wrapper">
      <div className="card-item">
        <div className="description-item">Name:</div>
        {itemI.user_name}
      </div>
      <div className="card-item">
        <div className="description-item">Surname:</div>
        {itemI.user_surname}
      </div>
      <div className="card-item">
        <div className="description-item">Date of Birth:</div>
        {itemI.birthDate}
      </div>
      <div className="card-item">
        <div className="description-item">Gender: </div>
        {itemI.radioBtn}
      </div>
      <div className="card-item">
        <div className="description-item">Vacancy:</div>
        {itemI.jobPosition}
      </div>
    </div>
  );
};

export default Card;
