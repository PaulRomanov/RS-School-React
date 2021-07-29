import './styles.scss';
// import IMAGE from './assets/react-logo.png';
import SearchEnginePage from './components/searchEnginePage/SearchEnginePage';

export const App = () => {
  return (
    <div>
      {/* <h1>React TypeScript Webpack Started Template</h1>
      <img src={IMAGE} alt="react-logo" width="300" height="200" /> */}
      <SearchEnginePage />
    </div>
  );
};

export default App;
