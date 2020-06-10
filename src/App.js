import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import Nav from './components/nav';
import Portfolio from './components/portfolio';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
