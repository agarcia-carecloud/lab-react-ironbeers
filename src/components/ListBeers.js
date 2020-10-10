import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  state = {
    listOfBeers: null,
  };

  componentDidMount() {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log({ beers: responseFromApi.data });
        this.setState({ listOfBeers: responseFromApi.data });
      })
      .catch((err) =>
        console.log(`error retrieving the list of beers: ${err}`)
      );
  }

  displayBeersList() {
    return this.state.listOfBeers.map((beer, i) => {
      return (
        <div key={i} className="list-item-box centerContent">
          <img className="beer-image" src={beer.image_url} alt="beer" />

          <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
          <br />
          <h3>{beer.tagline}</h3>
          <h5>Created by: {beer.contributed_by}</h5>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src="/images/home-icon.png" alt="home" />
          </Link>
        </header>
        <h2>All Beers</h2>
        <div className="centerContent list-item-container">
          {this.state.listOfBeers && this.displayBeersList()}
        </div>
      </div>
    );
  }
}

export default ListBeers;
