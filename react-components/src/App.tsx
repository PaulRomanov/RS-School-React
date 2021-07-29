import './styles.scss';
// import IMAGE from './assets/react-logo.png';
import SearchEnginePage from './components/searchEnginePage/SearchEnginePage';
import Cards from './components/cards/Cards';

export const App = () => {
  return (
    <div>
      
      <SearchEnginePage />
      <div className="cards-wrapper">
      <Cards    word = 'cry'
                translation = '  плакать'
                image = 'assets/img/cry.jpg'
                
      />
      <Cards  word = 'dance' 
                image = 'assets/img/dance.jpg' 
                translation = '  танцевать' 
      />
       <Cards  word = 'dive' 
                image = 'assets/img/dive.jpg' 
                translation = '  нырять' 
      />
       <Cards  word = 'draw' 
                image = 'assets/img/draw.jpg' 
                translation = '  рисовать' 
      />
       <Cards  word = 'open' 
                image = 'assets/img/open.jpg' 
                translation = '  открывать' 
      />
       <Cards  word = 'fly' 
                image = 'assets/img/fly.jpg' 
                translation = '  летать' 
      />
       <Cards  word = 'hug' 
                image = 'assets/img/hug.jpg' 
                translation = '  обнимать' 
      />
       <Cards  word = 'jump' 
                image = 'assets/img/jump.jpg' 
                translation = '  прыгать' 
      />
      
      </div>
      
    </div>
  );
};


export default App;

