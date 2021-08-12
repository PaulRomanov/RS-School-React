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
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface GET200_Articles {
  articles: CardType[];
}
