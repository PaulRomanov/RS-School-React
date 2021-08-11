export type CardType = {
  author: string;
  content: string;
  title: string;
  urlToImage: string;
  // strDrink: string;
};

export type CardProps = {
  itemElement: CardType;
};

export type Props = {
  setState: React.Dispatch<React.SetStateAction<CardType[]>>;
};
