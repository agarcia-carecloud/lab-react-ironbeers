import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import NavBar from './components/NavBar';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/random-beer" component={BeerDetails} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
