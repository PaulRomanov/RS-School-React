import { useState } from 'react';
import SearchLine from '../components/searchLine/SearchLine';
import Card from '../components/card/Card';
import { CardType } from '../type';
// import Posts from './Posts';

const MainPage = () => {
  // const [state, setState] = useState<any>({ drinks: [] });
  const [state, setState] = useState<CardType[]>([]);

  return (
    <div className="page-wrap">
      <SearchLine setState={setState} />
      {/* <Posts /> */}
      {state.map((itemElement, index) => {
        return <Card key={index.toString()} itemElement={itemElement} />;
      })}
      ;
    </div>
  );
};

export default MainPage;
