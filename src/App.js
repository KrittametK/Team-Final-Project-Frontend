import React from 'react';
import Home from './pages/Home'
import Match from './pages/Match'

import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Home />
      <Match />
    </div>
  );}
}

export default App;
