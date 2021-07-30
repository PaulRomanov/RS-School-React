import './styles.scss';
// import IMAGE from './assets/react-logo.png';
import SearchEnginePage from './components/searchEnginePage/SearchEnginePage';
import Cards from './components/cards/Cards';
import { repository } from './repository/repository';

export const App = () => {
  return (
    <div>

      <SearchEnginePage />
      <div className="cards-wrapper">
        <div className="cards-container">
          {repository.cardsElements.map((card, index) => {
            return <Cards 
              key = {index}
              word = {card.word}
              translation = {card.translation}
              image = {card.image}

            />
          })}
        </div>

      </div>

    </div>
  );
};


export default App;

