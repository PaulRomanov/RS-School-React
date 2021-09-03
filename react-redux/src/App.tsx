import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import './styles.scss';
import NotFound from './pages/NotFound';
import Details from './pages/details/details';

// eslint-disable-next-line import/prefer-default-export
export const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <PagesAll />
      </div>
    </Router>
  );
};

const PagesAll = () => {
  const location = useLocation();

  return (
    <div className="pages">
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/details/:title">
              <Details />
            </Route>
            <Route path="/error">
              <NotFound />
            </Route>
            <Redirect to="/error">
              <NotFound />
            </Redirect>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

// export default App;

// return (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={MainPage}>
//         {({ match }) => (
//           <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit />
//         )}
//       </Route>

//       <Route exact path="/about" component={About}>
//         {({ match }) => (
//           <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit />
//         )}
//       </Route>
//       <Route component={NotFound} />
//     </Switch>
//   </BrowserRouter>
// );

// return (
//   <BrowserRouter>
//     {/* <Switch> */}
//     <div className="container">
//       <Route exact path="/">
//         {({ match }) => (
//           <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
//             <MainPage />
//           </CSSTransition>
//         )}
//       </Route>

//       <Route exact path="/about">
//         {({ match }) => (
//           <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
//             <About />
//           </CSSTransition>
//         )}
//       </Route>
//     </div>
//     <Route path="*">
//       <NotFound />
//     </Route>
//     {/* </Switch> */}
//   </BrowserRouter>
// );

// return (
//   <BrowserRouter>
//     <div className="App">
//       <Suspense fallback={<div>Loading...</div>}>
//         {/* <Switch> */}
//         <div className="container">
//           {navData.map(({ Component, path }): JSX.Element => {
//             return (
//               <Route path={path} exact key={path.toString()}>
//                 {({ match }) => (
//                   <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
//                     <div className="page">{Component}</div>
//                   </CSSTransition>
//                 )}
//               </Route>
//             );
//           })}
//         </div>
//         {/* <Redirect to="/" /> */}
//         {/* </Switch> */}
//       </Suspense>
//     </div>
//   </BrowserRouter>
// );

// const navData = [
//   {
//     Component: <MainPage />,
//     path: '/',
//   },
//   {
//     Component: <About />,
//     path: '/about',
//   },
//   {
//     Component: <NotFound />,
//     path: '',
//   },
// ];
