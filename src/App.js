import React from 'react';
import Home from './pages/Home'
import Main from './pages/Main'
import NavBar from '../src/components/NavBar'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom' 

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/home' component={Home} />         
          <Route exact path='/main' component={Main} />
          <Redirect to='/home' /> 
        </Switch>      
    </div>
  );}
}

export default App;
