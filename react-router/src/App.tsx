/* eslint-disable import/prefer-default-export */
// import { match } from 'assert';
import React, { FC, Suspense } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage';
import './styles.scss';

const navData = [
  {
    Component: <MainPage />,
    path: '/',
  },
  {
    Component: <About />,
    path: '/about',
  },
];

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Switch> */}
          <div className="container">
            {navData.map(({ Component, path }): JSX.Element => {
              return (
                <Route path={path} exact key={path.toString()}>
                  {({ match }) => (
                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                      <div className="page">{Component}</div>
                    </CSSTransition>
                  )}
                </Route>
              );
            })}
          </div>
          {/* <Redirect to="/" /> */}
          {/* </Switch> */}
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
