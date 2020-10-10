import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BeerDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerDetails: null,
    };
  }

  componentDidMount() {
    console.log({ props: this.match.props.params });

    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((responseFromApi) => {
        console.log({ beer: responseFromApi.data });
        this.setState({ beerDetails: responseFromApi.data });
      })
      .catch((err) => console.log(`error getting details of a beer: ${err}`));
  }

  displayBeerDetails() {
    const { beerDetails } = this.state;
    console.log({ beerDetails });

    return (
      <div className="centerContent beerDetails">
        <div className="centerContent image-display">
          <img src={`${beerDetails.image_url}`} />
        </div>
        <br />
        <h2>{beerDetails.name} Details</h2>
        <h3>{beerDetails.tagline}</h3>
        <div className="rightContent additional-details">
          <h3>{beerDetails.attenuation_level}</h3>
          <h4>{beerDetails.first_brewed}</h4>
        </div>
        <p className="detail-description">{beerDetails.description}</p>
        <h4>{beerDetails.contributed_by}</h4>
      </div>
    );
  }

  //   loading() {
  //     return (
  //       <div>
  //         <h2>Beer Details</h2>
  //         <br />
  //         <h3>Loading...</h3>
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img src="/images/home-icon.png" alt="home" />
          </Link>
        </header>
        {this.state.beerDetails && this.displayBeerDetails()}
      </div>
    );
  }
}
