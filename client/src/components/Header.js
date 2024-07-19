import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Car Manager</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Car</Link>
    </nav>
  </header>
);

export default Header;
