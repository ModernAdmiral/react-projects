import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNFO from './components/VenueNFO'
import Highlight from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/header_footer/Footer'


class App extends Component {
  render() {
  return (
   
    <div className="App" style={{ height: "1500px", backgroundColor:"cornflowerblue"}}>
    <Element name="header">
      <Header />
    </Element>

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueNFO">
        <VenueNFO />
      </Element>

      <Element name="highlights">
        <Highlight />
      </Element>
      
      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}
}

export default App;
