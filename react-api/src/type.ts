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
