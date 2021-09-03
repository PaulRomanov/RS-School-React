import axios from 'axios';
import { SortType } from '../type';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export const getArticlesLink = (
  searchValueData: string,
  API_KEY: string,
  sortBy: SortType,
  pageSize: number,
  page: number): any => {
  axiosInstance
    .get(
      `v2/everything?q=${searchValueData}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
    )
}

export default axiosInstance;
