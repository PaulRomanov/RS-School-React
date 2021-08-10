import React from 'react';
import './SearchLine.scss';
import { useState, useEffect } from 'react';
import { boolean } from 'yargs';
import { getDrinks } from '../../services/api';

export const SearchLine = () => {

  const initialState = {
    "drinks": []
  };

  const [inputValue, setInputValue ] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [state, setState] = useState(initialState);

  const fetchDrinks = async (searchParam: String) => {
    const drinks: any = getDrinks(`${searchParam}`);
      
    return await (await (drinks)).json();
  }
  // fetchDrinks('vodka');
  console.log( fetchDrinks('vodka'));

   const searchDrinks = async ( searchTerm = '') => {
    try {
      setError(false);
      
      const drinks = await fetchDrinks(searchTerm); 

      setState(prev => ({
        ...drinks,
        drinks: prev.drinks
      }));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    searchDrinks(inputValue)
    
  }, [inputValue])

  console.log(state);

  return (
    <div className="serch-page">
      <div className="form-wrapper">
        <input 
        id="search" 
        placeholder="Site search..." 
        type="text" 
        value = {inputValue} 
        onChange = {e  =>  setInputValue(e.currentTarget.value)}
        />
        <input value="Поиск" id="submit" type="submit" />
      </div>
    </div>
  );
};


