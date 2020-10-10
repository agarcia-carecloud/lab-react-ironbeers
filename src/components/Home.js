import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="centerContent homePage">
      <header>
        <h2>IronBeers</h2>
      </header>
      <div className="centerContent home-links">
        <ul>
          <img src="/images/beer-taps-1.jpg" alt="beer-taps-1" />
          <li>
            <Link to="/beers">All Beers</Link>
          </li>
          <br />
          <img src="/images/beer-taps-2.jpg" alt="beer-taps-2" />
          <li>
            <Link to="/random-beer">Random Beer</Link>
          </li>
          <br />
          <img src="/images/beer-taps-3.jpg" alt="beer-taps-3" />
          <li>
            <Link to="/new-beer">Add New Beer</Link>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}
