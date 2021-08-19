export interface CardType {
  author: string;
  content: string;
  title: string;
  urlToImage: string;
  // strDrink: string;
}

export type CardProps = {
  itemElement: CardType;
};

export type Props = {
  setState: React.Dispatch<React.SetStateAction<CardType[]>>;
  sortBy: SortType;
  page: number;
  pageSize: number;
  // totalPages: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface GET200_Articles {
  articles: CardType[];
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export interface SortProps {
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
}

export interface PaginationProps {
  pageSize: number;
  paginate: (pageNumber: number) => void;
  // pageNumber: [];
  // totalPages: number;
  // totalResults: number;
  page: number;
  onChangePage: (pageFromInput: number) => void;
}
