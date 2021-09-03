import React from 'react'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { getArticlesLink } from '../services/api'
import { CardType, GET200_Articles, SortType } from '../type'
import { AppRootStateType } from './store'

export const initialState = {
  articles: [],
  searchValue: 'apple',
}

export type InitialStateType = {
  articles: CardType[],
  searchValue: string,
}

type ActionType = SetArticlesActionCreatorType | SetSearchValueActionCreatorType

const searchArticlesReduser = (state: InitialStateType = initialState, action: ActionType) => {
  switch(action.type){
    case 'SET_ARTICLES':
      return {
        ...state, 
        articles: [...action.payload],
      };
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      };
    default: 
      return state;     
  } 
};

export type SetArticlesActionCreatorType = {
  type: 'SET_ARTICLES',
  payload: any
}

export const setNewsActionCreator = (payload: any): SetArticlesActionCreatorType => ({
  type: 'SET_ARTICLES',
  payload, 
} as const); 

export type SetSearchValueActionCreatorType = {
  type: 'SET_SEARCH_VALUE',
  searchValue: string
}

export const setSearchValueActionCreator = (searchValue: string): SetSearchValueActionCreatorType => ({
  type: 'SET_SEARCH_VALUE',
  searchValue, 
} as const); 

type FetchPokemonTCType = ThunkAction<void, AppRootStateType, unknown, any>;

export const getDataThunkCreater = (
  searchInputValue: string, 
  API_KEY: string, 
  sortBy: SortType, 
  pageSize: number, 
  page: number ): FetchPokemonTCType => async (
   dispatch: Dispatch<any>) => {
   const data = await getArticlesLink(searchInputValue,  API_KEY, sortBy, pageSize, page)
     
        dispatch(setNewsActionCreator(data.articles))
    
  }


export default searchArticlesReduser;


// export const getArticlesLink = (
//   searchValueData: string,
//   API_KEY: string,
//   sortBy: SortType,
//   pageSize: number,
//   page: number) => {
//   axiosInstance
//     .get(
//       `v2/everything?q=${searchValueData}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
//     )
// }