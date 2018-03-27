import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Card from './Components/card/Card';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Card}/>
      </Router>
    );
  }
}
export default App;