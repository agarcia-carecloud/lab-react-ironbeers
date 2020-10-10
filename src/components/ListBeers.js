import React from 'react';
import { Link } from 'react-router-dom';

export default function ListBeers() {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/images/home-icon.png" alt="home" />
        </Link>
      </header>
      <h2>All Beers</h2>
    </div>
  );
}
