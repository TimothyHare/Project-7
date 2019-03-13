import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import axios from "axios";

// App Components
import Header from './component/Header';
import Search from './component/Search';
import Nav from './component/Nav';
import Falcons from './component/Falcons';
import Snakes from './component/Snakes';
import Lions from './component/Lions';
import NotFound from './component/NotFound';
import apiKey from './component/Config';
import PhotoContainer from './component/PhotoContainer';

//apiKey variable
const api= apiKey;


class App extends Component {
constructor() {
  super();
  this.state = {
    photos:[],
    loading: true
  }
}

//Search Function 
performSearch = search => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        photos: res.data.photos.photo,
        loading: false
      })
    })

    //Error function
    .catch(function (error) {
      console.log('Error fetching data from flickr', error);
    })
}

  render() {
    return (
      <BrowserRouter>
      <div className="container">
      <Header />
      <Search saerchPhoto = {this.performSearch}/>
      <Nav />
      <Switch>
            <Route path="/search/:name" render={() => <PhotoContainer loading={this.state.loading} gallery={this.state.photos} />} />
            <Route exact path="/" render={() => <Falcons searchFor="Falcons" name="Falcons" />} />
            <Route exact path="/Falcons" render={() => <Falcons searchFor="falcons" name="falcons" />} />
            <Route exact path="/Lions" render={() => <Lions searchFor="Lions" name="Lions" />} />
            <Route exact path="/Snakes" render={() => <Snakes searchFor="Snakes" name="Snakes" />} />
            <Route component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
