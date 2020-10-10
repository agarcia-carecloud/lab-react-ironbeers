import React from 'react';
import { Link } from 'react-router-dom';

export default function NewBeer() {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="/images/home-icon.png" alt="home" />
        </Link>
      </header>
      <h2>Create a New Beer</h2>
    </div>
  );
}
