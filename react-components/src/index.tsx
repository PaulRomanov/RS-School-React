import ReactDOM from 'react-dom';
import { App } from './App';
import { repository }  from './repository/repository';

ReactDOM.render(<App />, document.getElementById('root'));




// const listItems = repository.cardsElements.map((repository) =>
//   <li>{repository}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );