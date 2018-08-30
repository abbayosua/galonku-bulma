import React, { Component } from 'react';
import './App.css';
import Navbar from './Navigation'
import Main from './Main';
import Footer from './Footer'
import 'bulma/css/bulma.css';



class App extends Component {
  render() {
    return (
        <div className="hero is-info is-fullheight">
          <Navbar />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
