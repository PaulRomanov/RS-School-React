import React from 'react';
import { NavLink } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
  return (
    <div>
      <nav>
        <NavLink exact activeClassName="activ-link" className="shine-button btn-404" to="/">
          Back to Home page
        </NavLink>
      </nav>
      <img className="img-404" src="assets/404.png" alt="404" />
    </div>
  );
};

export default NotFound;
