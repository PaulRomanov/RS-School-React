import React, { FC } from 'react';
import './card.scss';

export interface ItemProps {
  itemI: Item2Props;
}

export interface Item2Props {
  userName: string;
  userSurname: string;
  radioBtn: string | boolean;
  birthDate: string;
  jobPosition: string | undefined;
  agreeCheck: boolean;
}

const Card: FC<ItemProps> = ({ itemI }) => {
  return (
    <div className="card-wrapper">
      <div className="card-item">
        <div className="description-item">Name:</div>
        {itemI.userName}
      </div>
      <div className="card-item">
        <div className="description-item">Surname:</div>
        {itemI.userSurname}
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
