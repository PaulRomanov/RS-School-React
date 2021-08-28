/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axiosInstance from '../../services/api';
import { CardType } from '../../type';
import './details.scss';

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
    <div className="details-wrapper">
      <NavLink className="view-button" to="/">
        Back to Home page
      </NavLink>

      <h1 className="details-h1">Details</h1>

      {currentCard
        .filter((card, index) => card.title === title && index === 0) // index === 0 убирает одинаковые статьи
        .map((card, index) => {
          return (
            <div key={index.toString()}>
              <div>
                <div className="title-name">Title: </div>
                <div className="information">{card.title}</div>
              </div>
              <div>
                <div className="title-name">Author: </div>
                <div className="information">{card.author}</div>
              </div>
              <div>
                <div className="title-name">Description: </div>
                <div className="information">{card.content}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
