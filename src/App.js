import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
