import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'


//Hats page 
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);



function App() {
  //add the swith to render the exact match i.e when we navigate hats page only hats page needs to rendered
  return (
    <div >
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;