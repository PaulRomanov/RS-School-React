import { useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType, SortType } from '../type';
import RadioBtn from '../components/radioBtn/radioBtn';

const MainPage = () => {
  // const [state, setState] = useState<any>({ drinks: [] });
  const [state, setState] = useState<CardType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);

  return (
    <div className="page-wrap">
      <SearchLine setState={setState} sortBy={sortBy} />
      <RadioBtn setSortBy={setSortBy} sortBy={sortBy} />
      {state.map((itemElement, index) => {
        return <Card key={index.toString()} itemElement={itemElement} />;
      })}
    </div>
  );
};

export default MainPage;
