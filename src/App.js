import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Planets from './components/Planets/Planets';
import Planet from './components/Planet/Planet';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Planets} />
        <Route path="/planet" component={Planet} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
