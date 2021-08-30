import React from 'react'
import { CardType, GET200_Articles } from '../type'

export const initialState = {
  articles: []
}

type ActionType = SetArticlesActionCreatorType

const searchArticlesReduser = (state: GET200_Articles = initialState, action: ActionType) => {
  switch(action.type){
    case 'SET_ARTICLES':
      return {
        ...state, 
        articles: [...action.payload],
      };
    default: 
      return state;     
  } 
};

export type SetArticlesActionCreatorType = {
  type: 'SET_ARTICLES'
  payload: any
}

export const setNewsActionCreator = (payload: any): SetArticlesActionCreatorType => ({
  type: 'SET_ARTICLES',
  payload, 
} as const); 

export default searchArticlesReduser;


