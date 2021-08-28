import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  // const [activBtn, setActiveBtn] = useState(false);

  return (
    <div>
      <nav>
        <NavLink exact activeClassName="activ-link" className="shine-button" to="/">
          Home
        </NavLink>

        <NavLink activeClassName="activ-link" className="shine-button" to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
