import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  timeout: 5000,
});

export const getDrinks = (value: String) => axiosInstance.get(`${value}`)
