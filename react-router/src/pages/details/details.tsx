/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axiosInstance from '../../services/api';
import { CardType } from '../../type';
// import './Details.scss';

const API_KEY = '90b034fec9b24e1cbad655a0092d8e7f';

const Details: FC = () => {
  const [currentCard, setCurrentCard] = useState<CardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { title }: { title: string } = useParams();
  useEffect(() => {
    setLoading(true);

    axiosInstance.get(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`).then((res) => {
      setCurrentCard(res.data.articles);
    });

    setLoading(false);
  }, [title]);

  return (
    <div className="details-container">
      <div className="not-found-link-home">
        <NavLink className="link-main-page" to="/">
          Back to main page
        </NavLink>
      </div>
      <h1 className="details-title">Details</h1>
      {/* <h3>{cards.title}</h3>
      <p>{cards.author}</p> */}
      {currentCard
        .filter((card, index) => card.title === title && index === 0) // index === 0 убирает одинаковые статьи
        .map((card, index) => {
          return (
            <div key={index.toString()}>
              <div className="details-subtitle">
                <div className="details-inf">Title: </div>
                <div className="details-subtitle_inf">{card.title}</div>
              </div>
              <div className="details-subtitle">
                <div className="details-inf">Author: </div>
                <div className="details-subtitle_inf">{card.author}</div>
              </div>
              <div className="details-subtitle">
                <div className="details-inf">Description: </div>
                <div className="details-subtitle_inf">{card.content}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
