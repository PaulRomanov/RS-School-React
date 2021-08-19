import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://thecocktaildb.com/',
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export default axiosInstance;
