import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerDetails() {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/images/home-icon.png" alt="home" />
        </Link>
      </header>
      <h2>Beer Details</h2>
    </div>
  );
}
