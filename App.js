import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import KnowAbout from './components/KnowAboutComponent';
import Songs from './components/SongsComponent';
import MemeQuiz from './components/MemeQuizComponent';
import Home from './components/HomeComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">          
            <Header /> 
            <Switch>         
              <Route path="/" exact component={Home} />
              <Route path="/about" component={KnowAbout} />
              <Route path="/songs" component={Songs} />
              <Route path="/quiz" component={MemeQuiz} /> 
            </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}


export default App;
