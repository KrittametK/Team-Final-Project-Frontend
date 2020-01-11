import React from 'react';
import Home from './pages/Home'
import PetFinder from './pages/PetFinder'

import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Home />
      <PetFinder />
    </div>
  );}
}

export default App;
