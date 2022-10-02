import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Imagine if <p className="boldH1"> <b>Snapchats</b> </p><p> had events</p> </h1>
      <h2> Easily host and share events with your friends across any social media</h2>
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Events
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Create my event
        </NavLink>
      </div>
    </header>
  );
};

export default Header;