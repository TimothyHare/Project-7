import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

// App Component
import Header from './component/Header';
import Search from './component/Search';
import Nav from './component/Nav';
import Falcons from './component/Falcons';
import Snakes from './component/Snakes';
import Lions from './component/Lions';
import NotFound from './component/NotFound';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <Header />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Falcons" render={ () => <Falcons title='Falcons' />} />
        <Route path="/Snakes" render={ () => <Snakes title='Snakes' />} />
        <Route path="/Lions" render={  () => <Lions title='Lions' />} />
        <Route component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
